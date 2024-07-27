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

import { Policy } from "./policy.ts";
import { getWebhookFromEnv, postToDiscord, pushToGit } from "../../utils.ts";
import type { PushResult } from "simple-git";
import { EmbedBuilder } from "@discordjs/builders";

export class Guidelines extends Policy {
  async run() {
    const content = await this.getHtmlContent("https://discord.com/guidelines");
    if (!content) {
      console.log("Failed to get guidelines content.");
      return;
    }

    await this.writeFile(`guidelines.md`, content);

    const result = await pushToGit(`👮 Guidelines has been updated`);

    if (!result?.update?.hash) return;
    await this.send(result);
  }

  async send(result: PushResult) {
    await postToDiscord(
      getWebhookFromEnv("WUMPUSCENTRAL_DISCORD_WEBHOOK_POLICIES"),
      result.update?.hash.to,
      {
        embeds: [
          new EmbedBuilder()
            .setTitle("Guidelines Update")
            .setURL(
              `https://github.com/xhyrom/discord-datamining/commit/${result?.update?.hash.to}`,
            )
            .setColor(0xffe45b)
            .toJSON(),
        ],
      },
    );
  }
}
