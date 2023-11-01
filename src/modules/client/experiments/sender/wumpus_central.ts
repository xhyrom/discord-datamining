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
import { chunk, getWebhookFromEnv, postToDiscord } from "../../../../utils.ts";
import type { Diff } from "../.";
import type { Experiment } from "../Experiment.ts";
import { EmbedBuilder } from "@discordjs/builders";
import { andList, nameFormat, parseFilter } from "../utils.ts";
import deepEqual from "fast-deep-equal";

export class WumpusCentralSender implements Sender {
  async send(diff: Diff, result: PushResult): Promise<void> {
    const embeds = [];

    for (const exp of diff.addedExperiments) {
      embeds.push(
        this.buildEmbed(exp, result?.update?.hash.to)
          .setColor(0x58ff80)
          .toJSON()
      );
      if (exp.rollout?.overrides)
        embeds.push(
          this.buildOverridesEmbed(
            exp,
            {},
            exp.rollout.overrides,
            result?.update?.hash.to
          )
            .setColor(0x58ff80)
            .toJSON()
        );
    }

    for (const exp of diff.removedExperiments) {
      embeds.push(
        this.buildEmbed(exp, result?.update?.hash.to)
          .setColor(0xff6565)
          .toJSON()
      );
    }

    for (const exp of diff.updatedExperiments) {
      embeds.push(
        this.buildEmbed(exp.after, result?.update?.hash.to)
          .setColor(0xfff673)
          .toJSON()
      );
      if (
        !deepEqual(
          exp.after.rollout?.overrides ?? {},
          exp.before?.rollout?.overrides ?? {}
        )
      )
        embeds.push(
          this.buildOverridesEmbed(
            exp.after,
            exp.before.rollout?.overrides ?? {},
            exp.after.rollout?.overrides ?? {},
            result?.update?.hash.to
          )
            .setColor(0xfff673)
            .toJSON()
        );
    }

    for (const exp of diff.firstRolloutBeganExperiments) {
      embeds.push(
        this.buildEmbed(exp, result?.update?.hash.to)
          .setColor(0x6571ff)
          .toJSON()
      );
    }

    const embedsPerTen = chunk(embeds, 10);

    for (const embeds of embedsPerTen) {
      await postToDiscord(
        getWebhookFromEnv("WUMPUSCENTRAL_DISCORD_WEBHOOK_EXPERIMENTS"),
        result?.update?.hash.to,
        {
          content: "<@&1106558964491096136>",
          embeds,
        }
      );
    }
  }

  private buildEmbed(
    exp: Experiment,
    commitHash: string | undefined
  ): EmbedBuilder {
    let description = "";

    for (const population of [
      ...(exp.rollout?.overrides_formatted ?? []),
      ...(exp.rollout?.populations ?? []),
    ]) {
      const filters =
        population.filters.length !== 0
          ? `${andList.format(population.filters.map((f) => parseFilter(f)))}`
          : "";

      if (filters) description += `${filters}\n`;

      if (Object.keys(population.buckets).length > 0) {
        description += "```js\n";
      }

      for (const [bucketName, bucketValue] of Object.entries(
        population.buckets
      ).sort((a, b) => {
        if (a[0] === "none") return -1;
        if (b[0] === "none") return 1;
        return 0;
      })) {
        const percentage =
          bucketValue.rollout.reduce(
            (total, range) => total + range.end - range.start,
            0
          ) / 100;
        description += [
          `${nameFormat(bucketName)}: ${percentage}% (${bucketValue.rollout
            .map((r) => `${r.start}-${r.end}`)
            .join(", ")})`,
          "",
        ].join("\n");
      }

      if (Object.keys(population.buckets).length > 0) {
        description += "```\n";
      }
    }

    const fields = [];

    if (exp.data.description?.length !== 0) {
      fields.push({
        name: "Treatments",
        value: `\`\`\`\n${exp.data.description?.join?.("\n")}\`\`\``,
        inline: true,
      });
    }

    fields.push({
      name: "Hash",
      value: `\`\`\`js\n${exp.hash}\`\`\``,
      inline: true,
    });

    const embed = new EmbedBuilder()
      .setTitle(this.experimentName(exp))
      .setURL(
        commitHash
          ? `https://github.com/xHyroM/discord-datamining/commit/${commitHash}`
          : "https://discord.gg/QgEbfFa9XA"
      )
      .addFields(fields);

    if (description) embed.setDescription(description);

    return embed;
  }

  private buildOverridesEmbed(
    exp: Experiment,
    oldOverrides: Record<string, string[]>,
    overrides: Record<string, string[]>,
    commitHash: string | undefined
  ): EmbedBuilder {
    const added = Object.fromEntries(
      Object.entries(overrides).map(([key, value]) => [
        key,
        value.filter((v) => !oldOverrides[key]?.includes(v)),
      ])
    );

    const removed = Object.fromEntries(
      Object.entries(oldOverrides).map(([key, value]) => [
        key,
        value.filter((v) => !overrides[key]?.includes(v)),
      ])
    );

    let descripton = "";

    for (const [key, values] of Object.entries(added)) {
      descripton += `Added\n\`\`\`\n`;
      for (const value of values) {
        descripton += `+ ${value} (${nameFormat(key)})\n`;
      }
      descripton += "```\n";
    }

    for (const [key, values] of Object.entries(removed)) {
      descripton += `Removed\n\`\`\`\n`;
      for (const value of values) {
        descripton += `- ${value} (${nameFormat(key)})\n`;
      }
      descripton += "```\n";
    }

    descripton += `All\n\`\`\``;
    for (const [key, value] of Object.entries(overrides)) {
      descripton += `${nameFormat(key)} = ${value.join(", ")}\n\n`;
    }

    return new EmbedBuilder()
      .setTitle(this.experimentName(exp))
      .setURL(
        commitHash
          ? `https://github.com/xHyroM/discord-datamining/commit/${commitHash}`
          : "https://discord.gg/QgEbfFa9XA"
      )
      .setDescription(descripton)
      .setFooter({
        text: "src: discord.gg/datamining @ xHyroM/discord-datamining",
      });
  }

  private experimentName(exp: Experiment): string {
    if (!exp.data.label && !exp.data.id) return `unknown (${exp.data.hash})`;

    return `${exp.data.id} (${exp.data.hash})`;
  }
}
