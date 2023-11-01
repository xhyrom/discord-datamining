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
import { octokit, pushToGit, readFile, writeFile } from "../../utils.ts";
import { WebBuild } from "./web_build/index.ts";
import { HostBuild } from "./host_build/index.ts";
import { Client } from "./index.ts";
import type { PushResult } from "simple-git";
import type { RestEndpointMethodTypes } from "@octokit/rest";
import { markdownTable } from "markdown-table";

export enum ChannelType {
  Stable,
  PublicTestingBeta, // PTB
  Canary,
}

export class Channel implements Module {
  hostBuild: HostBuild = new HostBuild(this);
  webBuild: WebBuild = new WebBuild(this);
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

    await this.hostBuild.run();
    await this.webBuild.run();

    await this.summary();
  }

  async summary() {
    const hostManifest = await this.hostBuild.manifest();
    const webBuild = await this.webBuild.scripts.build();

    const oldInfo = JSON.parse(
      (await readFile(join(this.baseDir, "info.json"))) ?? "{}"
    );

    await writeFile(
      join(this.baseDir, "info.json"),
      JSON.stringify(
        {
          build_number: await webBuild.buildNumber(),
          version_hash: await webBuild.versionHash(),
          host_version:
            (await hostManifest?.full?.host_version?.join?.(".")) ??
            oldInfo.host_version,
          built_at: await webBuild.builtAt(),
        },
        null,
        2
      )
    );

    if (hostManifest) {
      await writeFile(
        join(this.baseDir, "README.md"),
        [
          `# ${this.name}`,
          "",
          "### Info",
          `Build number: ${await webBuild.buildNumber()}  `,
          `Version hash: ${await webBuild.versionHash()}  `,
          `Host version: ${hostManifest.full.host_version.join(".")}  `,
          `Built at: ${new Date(
            (await webBuild.builtAt())!
          ).toLocaleString()}  `,
          "",
          "### Modules",
          markdownTable([
            ["Module", "Version", "Package sha256", "URL"],
            ...Object.entries(hostManifest.modules).map(
              ([moduleName, moduleData]) => [
                moduleName,
                moduleData.full.module_version.toString(),
                moduleData.full.package_sha256,
                moduleData.full.url,
              ]
            ),
          ]),
        ].join("\n")
      );
    }
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
}
