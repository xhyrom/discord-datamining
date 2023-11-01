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
import type { Channel } from "../../Channel.ts";
import { HostBuild } from "..";

export class HyrosCoffeeSender implements Sender {
  async send(
    result: PushResult,
    channel: Channel,
    hostBuild: HostBuild,
    date: Date
  ) {
    const embed = new EmbedBuilder()
      .setTitle(`${channel.name} Build`)
      .setColor(channel.color)
      .setTimestamp(date.getTime())
      .addFields(
        {
          name: "Host Version",
          value: await hostBuild.hostVersion(),
          inline: true,
        },
        {
          name: "Modules",
          value: Object.entries((await hostBuild.manifest())?.modules ?? [])
            ?.map(
              ([moduleName, moduleVersion]) => `${moduleName}: ${moduleVersion}`
            )
            .join("\n"),
          inline: true,
        }
      );

    await postToDiscord(
      getWebhookFromEnv("DISCORD_WEBHOOK_HOST_BUILDS"),
      result?.update?.hash.to,
      {
        content: "<@&1169316170529247413>",
        embeds: [embed.toJSON()],
      }
    );
  }
}
