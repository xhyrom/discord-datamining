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
  DATA_DIR,
  formatNumber,
  getWebhookFromEnv,
  omit,
  postToDiscord,
  postToGithub,
  pushToGit,
  readFile,
  writeFile,
} from "../utils.ts";
import type { Module } from ".";

interface Response {
  endpoint: string;
  meta: {
    limit_reached: boolean;
  };
  subdomain_count: number;
  subdomains: string[];
}

export class Domains implements Module {
  #apiKey: string;
  domains = ["discord.com"];

  constructor(apiKey: string) {
    this.#apiKey = apiKey;
  }

  get baseDir() {
    return join(DATA_DIR, "domains");
  }

  async run() {
    console.log("Scraping domains");

    const domainsResponse = await Promise.all(
      this.domains.map((domain) => this.get(domain))
    );

    for (let i = 0; i < domainsResponse.length; i++) {
      const domain = domainsResponse[i];
      const domainName = this.domains[i];

      const oldDomain = JSON.parse(
        (await readFile(join(this.baseDir, `${domainName}.json`))) ?? "{}"
      );

      if (!domain || !domainName) {
        console.log(`Domain ${domainName} is null!`);
        continue;
      }

      await writeFile(
        join(this.baseDir, `${domainName}.json`),
        JSON.stringify(omit(domain, "meta", "endpoint"), null, 2)
      );

      const result = await pushToGit(
        `🌐 Domain ${domainName} was updated`,
        `Subdomains (${formatNumber(
          domain.subdomains.length
        )}):\n${domain.subdomains.map((key) => `${key}`).join("\n")}`
      );

      if (!result?.update?.hash) continue;

      const diff = this.diff(domainName, oldDomain, domain);
      if (!diff) continue;

      const comment = await postToGithub(result?.update?.hash.to, diff);

      // TODO: switch to senders strategy
      await postToDiscord(
        getWebhookFromEnv("DISCORD_WEBHOOK_MISCELLANEOUS"),
        result?.update?.hash.to,
        {
          content: `<@&1112738631615008818>\n${
            diff.length > 2000 ? diff.slice(0, 1968) + "...```" : diff
          }`,
        },
        comment.data.html_url
      );
      await postToDiscord(
        getWebhookFromEnv("DISCORDINSIDERS_DISCORD_WEBHOOK_MISCELLANEOUS"),
        result?.update?.hash.to,
        {
          content: `<@&1167155150884962304>${
            diff.length > 2000 ? diff.slice(0, 1968) + "...```" : diff
          }`,
        },
        comment.data.html_url
      );
    }
  }

  async get(domain: string): Promise<Response | null> {
    const res = await fetch(
      `https://api.securitytrails.com/v1/domain/${domain}/subdomains?include_inactive=false`,
      {
        headers: {
          APIKEY: this.#apiKey,
        },
      }
    );

    if (!res.ok) return null;

    const json: Response = await res.json();

    return json;
  }

  diff<T extends Omit<Response, "meta" | "endpoint">>(
    name: string,
    oldDomain: T,
    newDomain: T
  ) {
    if (!oldDomain.subdomains) oldDomain.subdomains = [];
    if (!newDomain.subdomains) newDomain.subdomains = [];

    const removedSubdomains: string[] = [];
    const addedSubdomains: string[] = [];

    for (const domain of oldDomain.subdomains) {
      if (!newDomain.subdomains.includes(domain))
        removedSubdomains.push(domain);
    }

    for (const domain of newDomain.subdomains) {
      if (!oldDomain.subdomains.includes(domain)) addedSubdomains.push(domain);
    }

    if (removedSubdomains.length === 0 && addedSubdomains.length === 0)
      return "";

    let diff = `## Subdomains\n- ${name}\n\`\`\`diff`;

    if (removedSubdomains.length > 0) {
      diff += "\n# Removed\n";

      for (const domain of removedSubdomains) {
        diff += `- ${domain}\n`;
      }
    }

    if (addedSubdomains.length > 0) {
      diff += "\n# Added\n";

      for (const domain of addedSubdomains) {
        diff += `+ ${domain}\n`;
      }
    }

    diff += "```";

    return diff;
  }
}
