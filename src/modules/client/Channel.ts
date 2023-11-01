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
import type { Module } from "..";
import { octokit, pushToGit, readFile } from "../../utils.ts";
import { Scripts } from "./scripts/index.ts";
import { Stylesheets } from "./stylesheets/index.ts";
import { Client } from "./index.ts";
import { send } from "./build_senders/index.ts";
import type { PushResult } from "simple-git";
import type { RestEndpointMethodTypes } from "@octokit/rest";

export enum ChannelType {
  Stable,
  PublicTestingBeta, // PTB
  Canary,
}

export class Channel implements Module {
  scripts: Scripts = new Scripts(this);
  stylesheets: Stylesheets = new Stylesheets(this);
  #diff?: RestEndpointMethodTypes["repos"]["compareCommits"]["response"];
  public type: ChannelType;

  constructor(type: ChannelType) {
    this.type = type;
  }

  get displayType() {
    switch (this.type) {
      case ChannelType.Stable:
        return "stable";
      case ChannelType.PublicTestingBeta:
        return "ptb";
      case ChannelType.Canary:
        return "canary";
    }
  }

  get name() {
    switch (this.type) {
      case ChannelType.Stable:
        return "Stable";
      case ChannelType.PublicTestingBeta:
        return "Public Testing Beta";
      case ChannelType.Canary:
        return "Canary";
    }
  }

  get baseDir() {
    return join(Client.baseDir, "channels", this.displayType);
  }

  get baseUrl() {
    switch (this.type) {
      case ChannelType.Stable:
        return "https://discord.com";
      case ChannelType.PublicTestingBeta:
        return "https://ptb.discord.com";
      case ChannelType.Canary:
        return "https://canary.discord.com";
    }
  }

  get color() {
    switch (this.type) {
      case ChannelType.Stable:
        return 0x43b581;
      case ChannelType.PublicTestingBeta:
        return 0x7289da;
      case ChannelType.Canary:
        return 0xfcba03;
    }
  }

  async run() {
    console.log(`Scraping ${this.displayType} channel`);

    const latestVersionHash = await this.getVersionHash();
    const currentVersionHash = JSON.parse(
      (await readFile(join(this.baseDir, "info.json"))) ?? "{}"
    );
    if (
      latestVersionHash &&
      currentVersionHash &&
      latestVersionHash === currentVersionHash.version_hash
    ) {
      console.log(
        `${this.name} Client %s (%s) is up to date`,
        currentVersionHash.build_number,
        currentVersionHash.version_hash
      );
      return;
    }

    await this.scripts.run();
    await this.stylesheets.run();

    const build = await this.scripts.build();
    const manifest = await build.manifest();
    const date = new Date((await build.builtAt())!);
    const scriptFiles = await this.scripts.files();
    const stylesheetFiles = await this.stylesheets.files();

    const result = await pushToGit(
      `📥 ${
        this.name
      } Build ${await build.buildNumber()} (${await build.versionHash()})`,
      [
        `Build Number: ${await build.buildNumber()}`,
        `Version Hash: ${await build.versionHash()}`,
        `Host Version: ${manifest?.full.host_version.join(".")}`,
        `Build At: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} (${date.getTime()})`,
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

    await send(result, this, build, scriptFiles, stylesheetFiles, date);

    if (this.type !== ChannelType.Canary) return;

    await this.stylesheets.diff(result, this);
  }

  async diff(result: PushResult) {
    if (!result.update) return;

    if (this.#diff) return this.#diff;

    const diff = await octokit.repos.compareCommits({
      owner: "xHyroM",
      repo: "discord-datamining",
      base: result.update.hash.from,
      head: result.update.hash.to,
    });

    this.#diff = diff;

    return diff;
  }

  private async getVersionHash() {
    const res = await fetch(`${this.baseUrl}/login`);
    if (!res.ok) {
      return null;
    }

    // That's version hash
    return res.headers.get("X-Build-Id");
  }
}
