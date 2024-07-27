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
  formatNumber,
  getWebhookFromEnv,
  postToDiscord,
  postToGithub,
  pushToGit,
} from "../../utils.ts";
import { File } from "../../File.ts";
import { Policy } from "./policy.ts";
import type { PushResult } from "simple-git";
import { EmbedBuilder } from "@discordjs/builders";
import type { APIEmbed } from "discord-api-types/v10";

interface Acknowledgement {
  name: string;
  link: string;
}

export class Acknowledgements extends Policy {
  #file?: File;

  constructor(baseDir: string) {
    super(baseDir);
  }

  async run() {
    const old = JSON.parse(await this.readFile("acknowledgements.json", "[]"));
    const file = (await this.file())!;
    const content = await file.content();

    const matches = content.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g) || [];
    const acknowledgements: Acknowledgement[] = [];

    for (const input of matches) {
      const [_, name, link] = input.match(
        /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/,
      )!;

      if (!name || !link) {
        console.log(`Failed to get name & link from ${input}`);
        process.exit(1);
      }

      acknowledgements.push({ name, link });
    }

    await this.writeFile(
      "acknowledgements.json",
      JSON.stringify(acknowledgements, null, 2),
    );

    const result = await pushToGit(
      `💡 Acknowledgements has been updated`,
      `Acknowledgements (${formatNumber(
        acknowledgements.length,
      )}):\n${acknowledgements.map((key) => `${key.name}: ${key.link}`).join("\n")}`,
    );

    if (!result?.update?.hash) return;

    await post(result, old, acknowledgements);
  }

  async file() {
    if (this.#file) return this.#file;

    const res = await (
      await fetch(`https://canary.discord.com/acknowledgements`)
    ).text();

    const scripts = res
      .match(
        /<script[^>]+data-chunk="refresh-text_pages-Acknowledgements"[^>]*><\/script>/g,
      )
      ?.map((s) => s.match(/src="[^"]+"/g)?.[0].slice(13, -1))
      ?.map((s) => new File(s!))!;

    for (const script of scripts) {
      const content = await script.content();

      if (
        content.includes("https://github.com/babel") &&
        (content.match(/https:\/\/github\.com/g) || []).length > 50
      ) {
        this.#file = script;
      }
    }

    return this.#file;
  }

  async post(
    result: PushResult,
    old: Acknowledgement[],
    current: Acknowledgement[],
  ) {
    if (!result?.update?.hash.to) return;

    const diff = this.diff(old, current);
    if (diff.added.length === 0 && diff.removed.length === 0) return;

    const simpleDiff = this.simpleDiffString(diff.added, diff.removed);

    const comment = await postToGithub(result.update.hash.to, simpleDiff);

    await postToDiscord(
      getWebhookFromEnv("DISCORD_WEBHOOK_MISCELLANEOUS"),
      result?.update?.hash.to,
      {
        content: `<@&1112738631615008818>\n${
          simpleDiff.length > 2000 ? simpleDiff.slice(0, 1968) + "...```" : diff
        }`,
      },
      comment.data.html_url,
    );

    await postToDiscord(
      getWebhookFromEnv("WUMPUSCENTRAL_DISCORD_WEBHOOK_ACKNOWLEDGEMENTS"),
      result?.update?.hash.to,
      {
        embeds: this.embedDiff(diff.added, diff.removed),
      },
    );
  }

  diff(
    old: Acknowledgement[],
    current: Acknowledgement[],
  ): {
    added: Acknowledgement[];
    removed: Acknowledgement[];
  } {
    const added: Acknowledgement[] = [];
    const removed: Acknowledgement[] = [];

    for (const acknowledgement of current) {
      if (!old.some((a) => a.name === acknowledgement.name)) {
        added.push(acknowledgement);
      }
    }

    for (const acknowledgement of old) {
      if (!current.some((a) => a.name === acknowledgement.name)) {
        removed.push(acknowledgement);
      }
    }

    return {
      added,
      removed,
    };
  }

  simpleDiffString(added: Acknowledgement[], removed: Acknowledgement[]) {
    let diff = `## Acknowledgements\n\`\`\`diff`;

    if (removed.length > 0) {
      diff += "\n# Removed\n";

      for (const acknowledgement of removed) {
        diff += `- ${acknowledgement.name}\n`;
      }
    }

    if (added.length > 0) {
      diff += "\n# Added\n";

      for (const acknowledgement of added) {
        diff += `+ ${acknowledgement.name}\n`;
      }
    }

    diff += "```";

    return diff;
  }

  embedDiff(added: Acknowledgement[], removed: Acknowledgement[]): APIEmbed[] {
    const removedEmbed = new EmbedBuilder()
      .setTitle("Removed Software")
      .setColor(0xff5151);
    const addedEmbed = new EmbedBuilder()
      .setTitle("New Software")
      .setColor(0x4cff76);

    let removedDescription = "";
    let addedDescription = "";

    if (removed.length > 0) {
      for (const acknowledgement of removed) {
        removedDescription += `* [${acknowledgement.name}](${acknowledgement.link})\n`;
      }
    }

    if (added.length > 0) {
      for (const acknowledgement of added) {
        addedDescription += `* [${acknowledgement.name}](${acknowledgement.link})\n`;
      }
    }

    const embeds: APIEmbed[] = [];

    if (removedDescription) embeds.push(removedEmbed.toJSON());
    if (addedDescription) embeds.push(addedEmbed.toJSON());

    return embeds;
  }
}
