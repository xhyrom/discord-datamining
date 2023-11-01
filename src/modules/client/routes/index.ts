/**
  *  discord-dataming - powerful discord datamining, datamines discord
  *  Copyright (C) 2023 Jozef Steinhübl

  *  This program is free software: you can redistribute it and/or modify
  *  it under the terms of the GNU General Public License as published by
  *  the Free Software Foundation, either version 3 of the License, or
  *  (at your option) any later version.

  *  This program is distributed in the hope that it will be useful,
  *  but WITHOUT ANY WARRANTY; without even the implied warranty of
  *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  *  GNU General Public License for more details.
 
  *  You should have received a copy of the GNU General Public License
  *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  * **/

import { join } from "node:path";
import {
  buildString as lBuildString,
  // @ts-expect-error - No types
} from "@xhyrom-forks/discord-datamining-lang-differ";
import deepEqual from "fast-deep-equal";
import type { Module } from "../../index.ts";
import { Client } from "../index.ts";
import {
  writeFile,
  readFile,
  postToDiscord,
  getWebhookFromEnv,
  pushToGit,
  formatNumber,
  postToGithub,
} from "../../../utils.ts";

interface Route {
  url: string;
  allowed_methods: string[] | null;
}

export class Routes implements Module {
  get baseDir() {
    return join(Client.baseDir);
  }

  async run() {
    console.log("Scraping routes");

    const oldRoutes = JSON.parse(
      (await readFile(join(this.baseDir, "routes.json"))) ?? "{}"
    );

    const routes = await this.routes(oldRoutes);
    if (!routes) {
      console.log("Potentional outage, failed to fetch routes");
      return;
    }

    await writeFile(
      join(this.baseDir, "routes.json"),
      JSON.stringify(routes, null, 2)
    );

    const result = await pushToGit(
      "🗺️ Routes were updated",
      `Routes (${formatNumber(Object.keys(routes).length)}):\n${Object.entries(
        routes
      )
        .map(
          ([key, value]) =>
            `${key}: ${value.url}${
              value.allowed_methods
                ? ` (${value.allowed_methods.join(", ")})`
                : ""
            }`
        )
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    const diff = this.diff(oldRoutes, routes);
    if (!diff) return;

    const comment = await postToGithub(result?.update?.hash.to, diff);

    // TODO: switch to senders strategy
    await postToDiscord(
      getWebhookFromEnv("DISCORD_WEBHOOK_ROUTES"),
      result?.update?.hash.to,
      {
        content: `<@&1115349386663305217>\n${
          diff.length > 2000 ? diff.slice(0, 1968) + "...```" : diff
        }`,
      },
      comment.data.html_url
    );
    await postToDiscord(
      getWebhookFromEnv("DISCORDINSIDERS_DISCORD_WEBHOOK_ROUTES"),
      result?.update?.hash.to,
      {
        content: `<@&1167155230836789288>${
          diff.length > 2000 ? diff.slice(0, 1968) + "...```" : diff
        }`,
      },
      comment.data.html_url
    );
  }

  private async routes(
    oldRoutes: Record<string, Route>
  ): Promise<Record<string, Route> | null> {
    const routes = await fetch("https://api.distools.xhyrom.dev/v2/routes");
    if (!routes.ok) {
      return null;
    }

    const json: Record<string, string> = await routes.json();
    const result: Record<string, Route> = {};

    let i = 0;
    for (const [name, url] of Object.entries(json)) {
      const res = await this.getAllowedMethods(url);
      if (res.status === 404) {
        console.log(`Failed to fetch ${url}: ${res.text} (${res.status})`);

        result[name] = {
          url,
          allowed_methods: null,
        };

        i++;
        continue;
      }
      if (res.status === 429) {
        result[name] = {
          url,
          allowed_methods: oldRoutes[name]?.allowed_methods ?? null,
        };

        i++;
        continue;
      }
      if (!res.ok) {
        console.log(`Potentional outage ${url} ${res.text} (${res.status})`);

        result[name] = {
          url,
          allowed_methods: oldRoutes[name]?.allowed_methods ?? null,
        };

        i++;
        continue;
      }

      result[name] = {
        url,
        allowed_methods: res.allowed_methods,
      };

      i++;

      console.log(`Scraped ${i}/${Object.keys(json).length} routes`);
    }

    return result;
  }

  private diff(
    routesOld: Record<string, Route>,
    routesCurrent: Record<string, Route>
  ) {
    const addedRoutes = [];
    const updatedRoutes = [];
    const removedRoutes = [];

    for (const [name, route] of Object.entries(routesCurrent)) {
      if (!routesOld[name]) {
        addedRoutes.push([
          name,
          `${route.url}${
            route.allowed_methods
              ? ` (${route.allowed_methods.join(", ")})`
              : ""
          }`,
        ]);
        continue;
      }

      if (routesOld[name] && !deepEqual(routesOld[name], route)) {
        const oldRoute = routesOld[name]!;

        updatedRoutes.push([
          name,
          `${oldRoute.url}${
            oldRoute.allowed_methods
              ? ` (${oldRoute.allowed_methods.join(", ")})`
              : ""
          }`,
          `${route.url}${
            route.allowed_methods
              ? ` (${route.allowed_methods.join(", ")})`
              : ""
          }`,
        ]);
      }

      delete routesOld[name];
    }

    for (const [name, route] of Object.entries(routesOld)) {
      removedRoutes.push([
        name,
        `${route.url}${
          route.allowed_methods ? ` (${route.allowed_methods.join(", ")})` : ""
        }`,
      ]);
    }

    const builtString = lBuildString(
      "routes",
      "codeblock",
      addedRoutes,
      updatedRoutes,
      removedRoutes
    );

    return builtString ? builtString : "";
  }

  private async getAllowedMethods(route: string) {
    const res = await fetch(`https://discord.com/api/v10${route}`, {
      method: "OPTIONS",
    });

    if (!res.ok)
      return {
        allowed_methods: null,
        status: res.status,
        text: res.statusText,
        ok: res.ok,
      };

    return {
      allowed_methods: res.headers.get("allow")?.split(", ")?.sort() ?? [],
      status: res.status,
      text: res.statusText,
      ok: res.ok,
    };
  }
}
