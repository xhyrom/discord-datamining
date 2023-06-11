import { join } from "node:path";
import {
  diff as lDiff,
  buildString as lBuildString,
  // @ts-expect-error - No types
} from "@xhyrom-forks/discord-datamining-lang-differ";
// @ts-expect-error - No types
import getLangStrings from "@xhyrom-forks/discord-datamining-lang-differ/getLangStrings.js";
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

export class Strings implements Module {
  get baseDir() {
    return join(Client.baseDir);
  }

  async run() {
    const strings = getLangStrings(
      (await readFile(
        join(this.baseDir, "channels", "canary", "scripts", "main.js")
      )) ?? ""
    );

    const oldStrings = JSON.parse(
      (await readFile(join(this.baseDir, "strings.json"))) ?? "{}"
    );

    await writeFile(
      join(this.baseDir, "strings.json"),
      JSON.stringify(strings, null, 2)
    );

    const result = await pushToGit(
      `📃 Strings were updated`,
      `Strings - ${formatNumber(Object.keys(strings).length)}`
    );

    if (!result?.update?.hash) return;

    const diff = this.diff(oldStrings, strings);
    if (!diff) return;

    const comment = await postToGithub(result?.update?.hash.to, diff);
    await postToDiscord(
      getWebhookFromEnv("DISCORD_WEBHOOK_STRINGS"),
      result?.update?.hash.to,
      {
        content: `<@&1105589256996524042>\n${
          diff.length > 2000 ? diff.slice(0, 1968) + "...```" : diff
        }`,
      },
      comment.data.html_url
    );
  }

  private diff(
    stringsOld: Record<string, string>,
    stringsCurrent: Record<string, string>
  ) {
    const { addedStrings, updatedStrings, removedStrings } = lDiff([
      stringsOld,
      stringsCurrent,
    ]);

    const builtString = lBuildString(
      "strings",
      "codeblock",
      addedStrings,
      updatedStrings,
      removedStrings
    );

    return builtString ? builtString : "";
  }
}
