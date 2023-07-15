import type { PushResult } from "simple-git";
import type { Sender } from ".";
import { getWebhookFromEnv, postToDiscord } from "../../../utils.ts";
import { EmbedBuilder } from "@discordjs/builders";
import type { Build } from "../scripts/Build.ts";
import type { Channel } from "../Channel.ts";
import type { Scripts } from "../scripts/index.ts";
import type { Stylesheets } from "../stylesheets/index.ts";

export class HyrosCoffeeSender implements Sender {
  async send(
    result: PushResult,
    channel: Channel,
    build: Build,
    scriptFiles: Awaited<ReturnType<Scripts["files"]>>,
    stylesheetFiles: Awaited<ReturnType<Stylesheets["files"]>>,
    date: Date
  ) {
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
          value: scriptFiles.scripts
            .map((script) =>
              script.name === scriptFiles.mainScript.name
                ? `${script.path} (main)`
                : `${script.path}`
            )
            .join("\n"),
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
}
