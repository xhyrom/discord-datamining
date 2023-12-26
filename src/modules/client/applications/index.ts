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
import { File } from "../File.ts";
import type { Module } from "../../index.ts";
import {
  writeFile,
  rm,
  readFile,
  pushToGit,
  formatNumber,
  git,
} from "../../../utils.ts";
import { setTimeout as sleep } from "node:timers/promises";
import { Client } from "../index.ts";
import { readdir } from "node:fs/promises";

interface FetchSnowflakeResponse {
  type: "invalid" | "valid" | "unknown";
  data?: object;
}

export class Applications implements Module {
  get baseDir() {
    return join(Client.baseDir, "applications");
  }

  async run() {
    console.log("Scraping applications");

    await rm(join(this.baseDir, "applications"));

    const invalidIdsText =
      (await readFile(join(this.baseDir, "invalid_ids.json"))) ?? "[]";
    const invalidIds: Set<string> = new Set(JSON.parse(invalidIdsText));

    const ids = await this.getSnowflakes();

    const applications: object[] = [];

    for (const id of ids ?? []) {
      const result = await this.fetchSnowflake(id);
      if (result.type === "invalid") {
        invalidIds.add(id);
        continue;
      }

      if (result.type === "unknown") {
        continue;
      }

      applications.push(result.data!);
    }

    await git.pull();
    await writeFile(
      join(this.baseDir, "applications.json"),
      JSON.stringify(applications, null, 2)
    );
    await writeFile(
      join(this.baseDir, "invalid_ids.json"),
      JSON.stringify([...invalidIds], null, 2)
    );

    await git.pull(); // one more time to make sure we have the latest changes
    await pushToGit(
      "📱 Applications were updated",
      `${formatNumber(applications.length)} valid, ${formatNumber(
        invalidIds.size
      )} invalid`,
      "",
      "Co-Authored-By: Happy enderman <66224387+happyendermangit@users.noreply.github.com>"
    );
  }

  async getSnowflakes() {
    const scripts = await readdir(
      join(Client.baseDir, "channels", "canary", "web", "scripts", "scripts")
    );
    const files = scripts.map(
      (script) =>
        new File(
          join(
            Client.baseDir,
            "channels",
            "canary",
            "web",
            "scripts",
            "scripts",
            script
          ),
          true
        )
    );

    const result: string[] = [];
    for (const file of files) {
      const content = await file.content();
      if (!content) continue;

      const snowflakes = content.match(/\d{17,19}/g);
      if (!snowflakes) continue;

      result.push(...Array.from(snowflakes));
    }

    return result;
  }

  async fetchSnowflake(id: string): Promise<FetchSnowflakeResponse> {
    const url = `https://canary.discord.com/api/v9/applications/${id}/public`;
    const response = await fetch(url, {
      headers: {
        Authorization: process.env.DISCORD_USER_TOKEN!,
      },
    });

    if (response.status === 429) {
      const body = await response.json();
      const retryAfter = body.retry_after;

      console.log(`[applications] 429: Waiting ${retryAfter}ms`);

      await sleep(retryAfter + 1000);
      return await this.fetchSnowflake(id);
    }

    const body = await response.json();
    if (body.code === 10002) {
      return {
        type: "invalid",
      };
    }

    if (response.status === 200) {
      return {
        type: "valid",
        data: body,
      };
    }

    // Probably outage
    return {
      type: "unknown",
    };
  }
}
