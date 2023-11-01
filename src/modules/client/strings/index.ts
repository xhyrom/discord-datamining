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
    console.log("Scraping strings");

    const strings = getLangStrings(
      (await readFile(
        join(this.baseDir, "channels", "canary", "web", "scripts", "strings.js")
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

    // TODO: switch to senders strategy
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
    await postToDiscord(
      getWebhookFromEnv("DISCORDINSIDERS_DISCORD_WEBHOOK_STRINGS"),
      result?.update?.hash.to,
      {
        content: `<@&1167155135403794572>${
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
