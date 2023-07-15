import type { PushResult } from "simple-git";
import type { Sender } from ".";
import { getWebhookFromEnv, postToDiscord } from "../../../utils.ts";
import { EmbedBuilder } from "@discordjs/builders";
import type { Build } from "../scripts/Build.ts";
import { ChannelType, type Channel } from "../Channel.ts";
import type { Scripts } from "../scripts/index.ts";
import type { Stylesheets } from "../stylesheets/index.ts";

export class WumpusCentralSender implements Sender {
  async send(
    result: PushResult,
    channel: Channel,
    build: Build,
    _: Awaited<ReturnType<Scripts["files"]>>,
    __: Awaited<ReturnType<Stylesheets["files"]>>,
    ___: Date
  ) {
    // only canary
    if (channel.type !== ChannelType.Canary) return;

    const commitUrl = `https://github.com/xHyroM/discord-datamining/commit/${result?.update?.hash.to}`;
    const diff = await channel.diff(result);

    const mainFile = diff?.data.files?.find((f) =>
      f.filename.includes("main.js")
    );

    const embed = new EmbedBuilder().setColor(0xf4b524).addFields(
      {
        name: "Release",
        value: `\`\`\`js\n${(await build.buildNumber()) ?? "Unknown"}\n\`\`\``,
        inline: true,
      },
      {
        name: "Added Lines",
        value: `\`\`\`js\n${mainFile?.additions ?? "Unknown"}\n\`\`\``,
        inline: true,
      },
      {
        name: "Removed Lines",
        value: `\`\`\`js\n${mainFile?.deletions ?? "Unknown"}\n\`\`\``,
        inline: true,
      },
      {
        name: "​", // zero width space
        value: `[View Differences](${commitUrl})`,
      }
    );

    await postToDiscord(
      getWebhookFromEnv("WUMPUSCENTRAL_DISCORD_WEBHOOK_BUILDS"),
      result?.update?.hash.to,
      {
        embeds: [embed.toJSON()],
      }
    );
  }
}
