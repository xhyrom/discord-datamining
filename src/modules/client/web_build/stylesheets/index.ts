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
import { File } from "../../../../File.ts";
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
import * as csstree from "css-tree";

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

    const classes: Record<string, string> = {};

    for (const file of files.stylesheets ?? []) {
      const content = await file.content();
      if (!content) continue;

      csstree.walk(csstree.parse(content), (node) => {
        if (
          node.type === "ClassSelector" &&
          !node.name.startsWith("adyen-checkout")
        ) {
          const match = node.name.match(/^(.*)_[a-zA-Z0-9]{6}$/)?.[1];
          if (!match) return;

          classes[match] = node.name;
        }
      });

      await writeFile(
        join(this.baseDir, "stylesheets", file.path),
        await beautify(content, "css"),
      );
    }

    await writeFile(
      join(this.baseDir, "main.css"),
      await beautify((await files.mainStylesheet!.content())!, "css"),
    );

    await writeFile(
      join(this.baseDir, "classes.json"),
      JSON.stringify(classes, null, 2),
    );

    // Stylesheets diff is posted in WebBuild#run
  }

  async diff(result: PushResult, channel: Channel) {
    if (this.#webBuild.channel.type !== ChannelType.Canary) return;

    const diff = await channel.diff(result);
    if (!diff) return;

    const currentCssFile = diff.data.files?.find((f) =>
      f.filename.includes("main.css"),
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
      },
    );
  }

  async files() {
    if (this.#files) return this.#files;

    const res = await (
      await fetch(`${this.#webBuild.channel.baseUrl}/login`)
    ).text();

    const stylesheets = [
      ...res.matchAll(
        /<link?([^>]+)href="?([^>]+)\/assets\/(?<link_name>[a-z0-9.]+\.css)"?([^>]+)+>/g,
      ),
    ]
      .map((match) => match.groups?.link_name)
      ?.map((s) => new File(s!))!;

    this.#files = {
      stylesheets,
      mainStylesheet: stylesheets?.slice(-1)[0]!,
    };

    return this.#files;
  }
}
