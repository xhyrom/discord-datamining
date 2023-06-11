import { join } from "node:path";
import { EmbedBuilder } from "@discordjs/builders";
import type { Module } from "..";
import {
  getWebhookFromEnv,
  postToDiscord,
  pushToGit,
  readFile,
} from "../../utils.ts";
import { Scripts } from "./scripts/index.ts";
import { Stylesheets } from "./stylesheets/index.ts";
import { Client } from "./index.ts";

export enum ChannelType {
  Stable,
  PublicTestingBeta, // PTB
  Canary,
}

export class Channel implements Module {
  scripts: Scripts = new Scripts(this);
  stylesheets: Stylesheets = new Stylesheets(this);
  public type: ChannelType;

  constructor(type: ChannelType) {
    this.type = type;
  }

  get displayType() {
    switch (this.type) {
      case ChannelType.Stable:
        return "stable";
      case ChannelType.PublicTestingBeta:
        return "ptb";
      case ChannelType.Canary:
        return "canary";
    }
  }

  get name() {
    switch (this.type) {
      case ChannelType.Stable:
        return "Stable";
      case ChannelType.PublicTestingBeta:
        return "Public Testing Beta";
      case ChannelType.Canary:
        return "Canary";
    }
  }

  get baseDir() {
    return join(Client.baseDir, "channels", this.displayType);
  }

  get baseUrl() {
    switch (this.type) {
      case ChannelType.Stable:
        return "https://discord.com";
      case ChannelType.PublicTestingBeta:
        return "https://ptb.discord.com";
      case ChannelType.Canary:
        return "https://canary.discord.com";
    }
  }

  get color() {
    switch (this.type) {
      case ChannelType.Stable:
        return 0x43b581;
      case ChannelType.PublicTestingBeta:
        return 0x7289da;
      case ChannelType.Canary:
        return 0xfcba03;
    }
  }

  async run() {
    console.log(`Scraping ${this.displayType} channel`);

    const latestVersionHash = await this.getVersionHash();
    const currentVersionHash = JSON.parse(
      (await readFile(join(this.baseDir, "info.json"))) ?? "{}"
    );
    if (
      latestVersionHash &&
      currentVersionHash &&
      latestVersionHash === currentVersionHash.versionHash
    ) {
      console.log(
        `${this.name} Client %s (%s) is up to date`,
        currentVersionHash.buildNumber,
        currentVersionHash.versionHash
      );
      return;
    }

    await this.scripts.run();
    await this.stylesheets.run();

    const build = await this.scripts.build();
    const date = new Date((await build.builtAt())!);
    const scriptFiles = await this.scripts.files();
    const stylesheetFiles = await this.stylesheets.files();

    const result = await pushToGit(
      `📥 ${
        this.name
      } Build ${await build.buildNumber()} (${await build.versionHash()})`,
      [
        `Build Number: ${await build.buildNumber()}`,
        `Version Hash: ${await build.versionHash()}`,
        `Build At: ${date.getDate()} ${date.getMonth()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} (${date.getTime()})`,
      ].join("\n"),
      `Scripts (${scriptFiles.scripts.length}):\n${scriptFiles.scripts
        .map((script) =>
          script.name === scriptFiles.mainScript.name
            ? `* ${script.path}`
            : `  ${script.path}`
        )
        .join("\n")}`,
      `Stylesheets (${
        stylesheetFiles.stylesheets.length
      }):\n${stylesheetFiles.stylesheets
        .map((stylesheet) =>
          stylesheet.name === stylesheetFiles.mainStylesheet.name
            ? `* ${stylesheet.path}`
            : `  ${stylesheet.path}`
        )
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    const embed = new EmbedBuilder()
      .setTitle(`${this.name} Build`)
      .setColor(this.color)
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

    if (this.type !== ChannelType.Canary) return;

    await this.stylesheets.diff(result.update.hash.from, result.update.hash.to);
  }

  private async getVersionHash() {
    const res = await fetch(
      `${this.baseUrl}/assets/version.${this.displayType}.json`
    );
    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    return json.hash;
  }
}
