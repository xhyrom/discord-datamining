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

import { EmbedBuilder } from "@discordjs/builders";
import type { GreenHouseJob } from ".";
import {
  chunk,
  getWebhookFromEnv,
  maximumStringLen,
  postToDiscord,
  type ArrayDiff,
} from "../../utils";
import type { APIEmbed } from "discord-api-types/v10";

export async function wumpusCentralSend(
  diff: ArrayDiff<GreenHouseJob>,
  commitUrl: string,
) {
  const embeds: APIEmbed[] = [];
  console.log(commitUrl);

  for (const job of diff.added) {
    embeds.push(
      new EmbedBuilder()
        .setTitle(job.title)
        .addFields(
          {
            name: "Department",
            value: job.departments[0]?.name!,
            inline: true,
          },
          {
            name: "Location",
            value: job.location.name,
            inline: true,
          },
          {
            name: "Office",
            value: job.offices[0]?.name!,
            inline: true,
          },
          {
            name: "Jobs URL",
            value: `https://discord.com/jobs/${job.id}`,
            inline: true,
          },
          {
            name: "Updated At",
            value: `<t:${Math.round(new Date(job.updated_at).getTime() / 1000)}>`,
            inline: true,
          },
          {
            name: "Education",
            value: job.education ?? "?",
            inline: true,
          },
          {
            name: "Id",
            value: job.id.toString(),
            inline: true,
          },
          {
            name: "Internal Job Id",
            value: job.internal_job_id.toString(),
            inline: true,
          },
          {
            name: "Requisition Id",
            value: job.requisition_id,
            inline: true,
          },
        )
        .setColor(0x58ff80)
        .toJSON(),
    );
  }

  for (const job of diff.removed) {
    embeds.push(
      new EmbedBuilder()
        .setTitle(job.title)
        .addFields(
          {
            name: "Id",
            value: job.id.toString(),
            inline: true,
          },
          {
            name: "Internal Job Id",
            value: job.internal_job_id.toString(),
            inline: true,
          },
          {
            name: "Requisition Id",
            value: job.requisition_id,
            inline: true,
          },
        )
        .setColor(0xff6565)
        .toJSON(),
    );
  }

  for (const job of diff.updated) {
    let updates = "```diff\n";

    const changesLength = Object.values(job.changes).length;
    let i = 0;
    for (const [path, change] of Object.entries(job.changes)) {
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
      new EmbedBuilder()
        .setTitle(job.new.title)
        .setURL(commitUrl)
        .addFields(
          {
            name: "Id",
            value: job.new.id.toString(),
            inline: true,
          },
          {
            name: "Internal Job Id",
            value: job.new.internal_job_id.toString(),
            inline: true,
          },
          {
            name: "Requisition Id",
            value: job.new.requisition_id,
            inline: true,
          },
          {
            name: "Updates",
            value: maximumStringLen(updates, 1024),
          },
        )
        .setColor(0xfff673)
        .toJSON(),
    );
  }

  const embedsPerTen = chunk(embeds, 10);

  for (const embeds of embedsPerTen) {
    await postToDiscord(
      getWebhookFromEnv("WUMPUSCENTRAL_DISCORD_WEBHOOK_JOBS"),
      undefined,
      {
        embeds,
      },
      commitUrl,
    );
  }
}
