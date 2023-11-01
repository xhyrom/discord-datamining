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

import type { PushResult } from "simple-git";
import type { Sender } from ".";
import { getWebhookFromEnv, postToDiscord } from "../../../../utils.ts";
import { EmbedBuilder } from "@discordjs/builders";
import type { Build } from "../scripts/Build.ts";
import type { Channel } from "../../Channel.ts";
import type { Scripts } from "../scripts/index.ts";
import type { Stylesheets } from "../stylesheets/index.ts";
import type { File } from "../../File.ts";

export class HyrosCoffeeSender implements Sender {
  async send(
    result: PushResult,
    channel: Channel,
    build: Build,
    scriptFiles: Awaited<ReturnType<Scripts["files"]>>,
    stylesheetFiles: Awaited<ReturnType<Stylesheets["files"]>>,
    date: Date
  ) {
    const importantScripts = [
      scriptFiles.chunkLoader,
      scriptFiles.classMappings,
      scriptFiles.mainScript,
      scriptFiles.vendor,
      scriptFiles.shared,
      scriptFiles.strings,
    ].filter((script): script is File => script !== null);

    const embed = new EmbedBuilder()
      .setTitle(`${channel.name} Build`)
      .setColor(channel.color)
      .setTimestamp(date.getTime())
      .addFields(
        {
          name: "Build Number",
          value: (await build.buildNumber()) ?? "Unknown",
          inline: true,
        },
        {
          name: "Version Hash",
          value: (await build.versionHash()) ?? "Unknown",
          inline: true,
        },
        {
          name: "Built At",
          value: `<t:${Math.floor(date.getTime() / 1000)}> (<t:${Math.floor(
            date.getTime() / 1000
          )}:R>)`,
          inline: true,
        },
        {
          name: "Scripts",
          value: [
            importantScripts
              .map((script) => this.formatScriptName(scriptFiles, script))
              .join("\n"),
            `*And ${
              scriptFiles.scripts.length - importantScripts.length
            } more...*`,
          ].join("\n"),
        },
        {
          name: "Stylesheets",
          value: stylesheetFiles.stylesheets
            .map((stylesheet) =>
              stylesheet.name === stylesheetFiles.mainStylesheet.name
                ? `${stylesheet.path} (main)`
                : `${stylesheet.path}`
            )
            .join("\n"),
        }
      );

    await postToDiscord(
      getWebhookFromEnv("DISCORD_WEBHOOK_BUILDS"),
      result?.update?.hash.to,
      {
        content: "<@&1117194731328393396>",
        embeds: [embed.toJSON()],
      }
    );
  }

  formatScriptName(
    scriptFiles: Awaited<ReturnType<Scripts["files"]>>,
    script: File
  ) {
    let suffix = "";

    if (script.name === scriptFiles.mainScript.name) suffix = "main";

    if (script.name === scriptFiles.vendor?.name) suffix = "vendor";

    if (script.name === scriptFiles.chunkLoader?.name) suffix = "chunk loader";

    if (script.name === scriptFiles.classMappings?.name)
      suffix = "class mappings";

    if (script.name === scriptFiles.strings?.name) suffix = "strings";

    if (script.name === scriptFiles.shared?.name) suffix = "shared";

    if (script.name === scriptFiles.routes?.name) suffix = "routes";

    return `${script.path}${suffix ? ` (${suffix})` : ""}`;
  }
}
