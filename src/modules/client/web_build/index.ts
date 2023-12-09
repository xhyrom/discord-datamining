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

import type { Module } from "../../index.ts";
import { numberPad, pushToGit, readFile } from "../../../utils.ts";
import { ChannelType, type Channel } from "../Channel.ts";
import { Scripts } from "./scripts/index.ts";
import { Stylesheets } from "./stylesheets/index.ts";
import { send } from "./senders/index.ts";

export class WebBuild implements Module {
  #channel: Channel;
  scripts: Scripts = new Scripts(this);
  stylesheets: Stylesheets = new Stylesheets(this);

  constructor(channel: Channel) {
    this.#channel = channel;
  }

  get baseDir() {
    return join(this.#channel.baseDir, "web");
  }

  get channel() {
    return this.#channel;
  }

  async run(): Promise<void> {
    console.log(`Scraping web for ${this.#channel.type}`);

    const latestVersionHash = await this.getVersionHash();
    const currentVersionHash = JSON.parse(
      (await readFile(join(this.baseDir, "web_build.json"))) ?? "{}"
    );
    if (
      latestVersionHash &&
      currentVersionHash &&
      latestVersionHash === currentVersionHash.version_hash
    ) {
      console.log(
        `${this.#channel.name} Web Build of Client %s (%s) is up to date`,
        currentVersionHash.build_number,
        currentVersionHash.version_hash
      );
      return;
    }

    await this.scripts.run();
    await this.stylesheets.run();

    const build = await this.scripts.build();
    const date = new Date(build.builtAt);
    const scriptFiles = await this.scripts.files();
    const stylesheetFiles = await this.stylesheets.files();

    await this.#channel.summary();

    const result = await pushToGit(
      `📥 ${this.#channel.name} Web Build ${build.buildNumber} (${
        build.versionHash
      })`,
      [
        `Build Number: ${build.buildNumber}`,
        `Version Hash: ${build.versionHash}`,
        `Build At: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${numberPad(
          date.getHours()
        )}:${numberPad(date.getMinutes())}:${numberPad(
          date.getSeconds()
        )} (${numberPad(date.getTime())})`,
      ].join("\n"),
      `Scripts (${scriptFiles.scripts.length}):\n${scriptFiles.scripts
        .map((script) =>
          script.name === scriptFiles.mainScript.name
            ? `* ${script.path}`
            : `  ${script.path}`
        )
        .join("\n")}`,
      `Stylesheets (${
        stylesheetFiles.stylesheets.length
      }):\n${stylesheetFiles.stylesheets
        .map((stylesheet) =>
          stylesheet.name === stylesheetFiles.mainStylesheet.name
            ? `* ${stylesheet.path}`
            : `  ${stylesheet.path}`
        )
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    await send(
      result,
      this.#channel,
      build,
      scriptFiles,
      stylesheetFiles,
      date
    );

    if (this.#channel.type !== ChannelType.Canary) return;

    await this.stylesheets.diff(result, this.channel);
  }

  private async getVersionHash() {
    const res = await fetch(`${this.#channel.baseUrl}/login`);
    if (!res.ok) {
      return null;
    }

    // That's version hash
    return res.headers.get("X-Build-Id");
  }
}
