import { join } from "node:path";
import {
  diff as lDiff,
  buildString as lBuildString,
  // @ts-expect-error - No types
} from "@xhyrom-forks/discord-datamining-lang-differ";
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

export class Routes implements Module {
  get baseDir() {
    return join(Client.baseDir);
  }

  async run() {
    const routes = await fetch("https://api.distools.xhyrom.dev/v2/routes");
    if (!routes.ok) {
      console.log("Potentional outage, failed to fetch routes");
      return;
    }

    const json = await routes.json();
    const oldRoutes = JSON.parse(
      (await readFile(join(this.baseDir, "routes.json"))) ?? "{}"
    );

    await writeFile(
      join(this.baseDir, "routes.json"),
      JSON.stringify(json, null, 2)
    );

    const result = await pushToGit(
      `🗺️ Routes were updated`,
      `Routes (${formatNumber(Object.keys(json).length)}):\n${Object.entries(
        json
      )
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    const diff = this.diff(oldRoutes, json);
    if (!diff) return;

    const comment = await postToGithub(result?.update?.hash.to, diff);
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
  }

  private diff(
    routesOld: Record<string, string>,
    routesCurrent: Record<string, string>
  ) {
    const { addedStrings, updatedStrings, removedStrings } = lDiff([
      routesOld,
      routesCurrent,
    ]);

    const builtString = lBuildString(
      "routes",
      "codeblock",
      addedStrings,
      updatedStrings,
      removedStrings
    );

    return builtString ? builtString : "";
  }
}
