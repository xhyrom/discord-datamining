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
  type ArrayDiff,
} from "../../../../utils.ts";
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10";
import type { Experiment } from "../Experiment.ts";
import { EmbedBuilder } from "@discordjs/builders";

export class HyrosCoffeeSender implements Sender {
  async send(diff: ArrayDiff<Experiment>, result: PushResult) {
    const embeds: APIEmbed[] = [];

    for (const exp of diff.added) {
      embeds.push(
        this.buildEmbed(
          {
            before: "New",
          },
          exp,
        )
          .setColor(0x2cde5c)
          .toJSON(),
      );
    }

    for (const exp of diff.removed) {
      embeds.push(
        this.buildEmbed(
          {
            after: "Removed",
          },
          exp,
        )
          .setColor(0xde2c2c)
          .toJSON(),
      );
    }

    for (const exp of diff.updated) {
      let updates = "```diff\n";

      const changesLength = Object.values(exp.changes).length;
      let i = 0;
      for (const [path, change] of Object.entries(exp.changes)) {
        if (!change.old && change.new) {
          updates += `${path}\n+ ${change.new.toString()}`;
        } else if (change.old && change.new) {
          updates += `${path}\n- ${change.old.toString()}\n+ ${change.new.toString()}`;
        } else {
          updates += `${path}\n- ${change.old}`;
        }

        updates += `${i !== changesLength - 1 ? "\n\n" : ""}`;

        i++;
      }

      updates += "\n```";

      embeds.push(
        this.buildEmbed(
          {
            after: "Updated",
          },
          exp.new,
        )
          .setDescription(maximumStringLen(updates, 1024))
          .setColor(0x2c5cde)
          .toJSON(),
      );
    }

    const embedsPerTen = chunk(embeds, 10);

    for (const embeds of embedsPerTen) {
      await postToDiscord(
        getWebhookFromEnv("DISCORD_WEBHOOK_EXPERIMENTS"),
        result?.update?.hash.to,
        {
          content: "<@&1105589221185568851>",
          embeds,
        },
      );
    }
  }

  private buildEmbed(
    title: {
      before?: string | null;
      after?: string | null;
    },
    experiment: Experiment,
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
        }`,
      )
      .addFields(possibleFields);
  }
}
