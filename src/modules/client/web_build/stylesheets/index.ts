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
import { File } from "../../File.ts";
import type { Module } from "../../../index.ts";
import {
  beautify,
  writeFile,
  rm,
  postToDiscord,
  getWebhookFromEnv,
} from "../../../../utils.ts";
import { ChannelType, type Channel } from "../../Channel.ts";
import type { PushResult } from "simple-git";
import type { WebBuild } from "../index.ts";

export class Stylesheets implements Module {
  #files?: {
    stylesheets: File[];
    mainStylesheet: File;
  };
  #webBuild: WebBuild;

  constructor(webBuild: WebBuild) {
    this.#webBuild = webBuild;
  }

  get baseDir() {
    return join(this.#webBuild.baseDir, "stylesheets");
  }

  async run() {
    console.log(`Scraping stylesheets for ${this.#webBuild.channel.type}`);

    const files = await this.files();

    await rm(join(this.baseDir, "stylesheets"));

    for (const file of files.stylesheets ?? []) {
      await writeFile(
        join(this.baseDir, "stylesheets", file.path),
        beautify(await file.content(), "css")
      );
    }

    await writeFile(
      join(this.baseDir, "main.css"),
      beautify(await files.mainStylesheet!.content(), "css")
    );

    // Stylesheets diff is posted in WebBuild#run
  }

  async diff(result: PushResult, channel: Channel) {
    if (this.#webBuild.channel.type !== ChannelType.Canary) return;

    const diff = await channel.diff(result);
    if (!diff) return;

    const currentCssFile = diff.data.files?.find((f) =>
      f.filename.includes("main.css")
    );
    if (!currentCssFile || !currentCssFile.patch) return;

    const desc = `\`\`\`diff\n${currentCssFile.patch}\n\`\`\``;

    // TODO: switch to senders strategy
    await postToDiscord(
      getWebhookFromEnv("DISCORD_WEBHOOK_STYLESHEETS"),
      result.update?.hash.to,
      {
        content: `<@&1105847524662706226>\n${
          desc.length > 2000 ? desc.slice(0, 1968) + "...```" : desc
        }`,
      }
    );
    await postToDiscord(
      getWebhookFromEnv("DISCORDINSIDERS_DISCORD_WEBHOOK_STYLESHEETS"),
      result.update?.hash.to,
      {
        content: `${
          desc.length > 2000 ? desc.slice(0, 1968) + "...```" : desc
        }`,
      }
    );
  }

  async files() {
    if (this.#files) return this.#files;

    const res = await (
      await fetch(`${this.#webBuild.channel.baseUrl}/login`)
    ).text();

    const stylesheets = res
      .match(/<link href="\/assets\/[a-z0-9.]+\.css"[^>]+>/g)
      ?.map((s) => s.match(/href="[^"]+"/g)?.[0].slice(14, -1))
      ?.map((s) => new File(s!))!;

    this.#files = {
      stylesheets,
      mainStylesheet: stylesheets?.slice(-1)[0]!,
    };

    return this.#files;
  }
}
