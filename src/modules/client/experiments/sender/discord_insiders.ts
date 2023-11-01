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
import {
  chunk,
  getWebhookFromEnv,
  maximumStringLen,
  postToDiscord,
} from "../../../../utils.ts";
import type { Diff } from "../.";
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10";
import type { Experiment } from "../Experiment.ts";
import { EmbedBuilder } from "@discordjs/builders";

export class DiscordInsidersSender implements Sender {
  async send(diff: Diff, result: PushResult) {
    const embeds: APIEmbed[] = [];

    for (const exp of diff.addedExperiments) {
      embeds.push(
        this.buildEmbed(
          {
            before: "New",
          },
          exp
        )
          .setFooter({
            text: "Powered by xHyroM/discord-datamining",
          })
          .setColor(0x2cde5c)
          .toJSON()
      );
    }

    for (const exp of diff.removedExperiments) {
      embeds.push(
        this.buildEmbed(
          {
            after: "Removed",
          },
          exp
        )
          .setFooter({
            text: "Powered by xHyroM/discord-datamining",
          })
          .setColor(0xde2c2c)
          .toJSON()
      );
    }

    for (const exp of diff.updatedExperiments) {
      if (!exp.after.diff) continue;

      embeds.push(
        this.buildEmbed(
          {
            after: "Updated",
          },
          exp.after
        )
          .setDescription(
            maximumStringLen(`\`\`\`diff\n${exp.after.diff}\n\`\`\``, 4096)
          )
          .setFooter({
            text: "Powered by xHyroM/discord-datamining",
          })
          .setColor(0x2c5cde)
          .toJSON()
      );
    }

    const embedsPerTen = chunk(embeds, 10);

    for (const embeds of embedsPerTen) {
      await postToDiscord(
        getWebhookFromEnv("DISCORDINSIDERS_DISCORD_WEBHOOK_EXPERIMENTS"),
        result?.update?.hash.to,
        {
          content: "<@&1167155116235833487>",
          embeds,
        }
      );
    }
  }

  private buildEmbed(
    title: {
      before?: string | null;
      after?: string | null;
    },
    experiment: Experiment
  ) {
    const fields = [
      {
        name: "Label",
        value: experiment.data.label ?? "unknown",
      },
      {
        name: "Id",
        value: experiment.data.id ?? "unknown",
      },
      {
        name: "Hash",
        value: experiment.data.hash.toString(),
      },
      {
        name: "Kind",
        value: experiment.data.kind,
      },
      {
        name: "Treatments",
        value: experiment.data.description?.join?.("\n"),
      },
      {
        name: "Populations",
        value: experiment.formattedPopulations,
      },
      {
        name: "Overrides",
        value: experiment.formattedOverrides,
      },
      {
        name: "Overrides Formatted",
        value: experiment.formattedOverridesFormatted,
      },
    ];

    // Keep only fields with a value
    const possibleFields = fields.filter((f) => f.value) as APIEmbedField[];

    return new EmbedBuilder()
      .setTitle(
        `${title.before ? `${title.before} ` : ""}Experiment${
          title.after ? ` ${title.after}` : ""
        }`
      )
      .setFooter({
        text: "Powered by xHyroM/discord-datamining",
      })
      .addFields(possibleFields);
  }
}
