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
import { writeFile, rm, pushToGit, readFile } from "../../../utils.ts";
import type { Channel } from "../Channel.ts";
import { send } from "./senders/index.ts";
import { markdownTable } from "markdown-table";
import deepEqual from "fast-deep-equal";

interface ModuleContent {
  host_version: [number, number, number];
  module_version: number;
  package_sha256: string;
  url: string;
}

interface ManifestContent {
  modules: Record<
    string,
    {
      full: ModuleContent;
      deltas: ModuleContent[];
    }
  >;
  full: ModuleContent;
}

export class HostBuild implements Module {
  #channel: Channel;
  #manifestContent?: ManifestContent;

  constructor(channel: Channel) {
    this.#channel = channel;
  }

  get baseDir() {
    return join(this.#channel.baseDir, "host");
  }

  async run() {
    console.log(`Scraping host for ${this.#channel.type}`);

    const manifest = await this.manifest();
    if (!manifest) {
      console.log("Manifest not found, potentional outage?");
      return;
    }

    const oldManifest = JSON.parse(
      (await readFile(join(this.baseDir, "manifest.json"))) ?? "{}"
    );

    if (deepEqual(manifest, oldManifest)) {
      console.log("Manifests are equal, skipping");
      return;
    }

    await rm(join(this.baseDir, "modules"));

    await writeFile(
      join(this.#channel.baseDir, "README.md"),
      [
        `# ${this.#channel.name}`,
        "",
        "### Info",
        `Host version: **${manifest.full.host_version.join(".")}**`,
        "",
        "### Modules",
        markdownTable([
          ["Module", "Version", "Package sha256", "URL"],
          ...Object.entries(manifest.modules).map(
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

    await writeFile(
      join(this.baseDir, "manifest.json"),
      JSON.stringify(manifest, null, 2)
    );

    await writeFile(
      join(this.baseDir, "host_build.json"),
      JSON.stringify(
        {
          modules: Object.entries(manifest.modules).map(
            ([moduleName, moduleData]) => ({
              name: moduleName,
              version: moduleData.full.module_version,
              package_sha256: moduleData.full.package_sha256,
              url: moduleData.full.url,
            })
          ),
          host_version: await this.hostVersion(),
        },
        null,
        2
      )
    );

    for (const [moduleName, moduleData] of Object.entries(manifest.modules)) {
      await writeFile(
        join(this.baseDir, "modules", moduleName, "info.json"),
        JSON.stringify(
          {
            full: {
              host_version: moduleData.full.host_version.join("."),
              module_version: moduleData.full.module_version,
              package_sha256: moduleData.full.package_sha256,
              url: moduleData.full.url,
            },
            deltas:
              moduleData.deltas?.map((delta) => ({
                host_version: delta.host_version.join("."),
                module_version: delta.module_version,
                package_sha256: delta.package_sha256,
                url: delta.url,
              })) ?? [],
          },
          null,
          2
        )
      );
    }

    await this.#channel.summary();

    const result = await pushToGit(
      `📥 ${this.#channel.name} Host Build ${manifest.full.host_version.join(
        "."
      )}`,
      [`Host Version: ${await this.hostVersion()}`].join("\n"),
      `Modules (${manifest.modules.length}):\n${Object.entries(manifest.modules)
        .map(
          ([moduleName, moduleVersion]) =>
            `  ${moduleName}: ${moduleVersion.full.module_version}`
        )
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    await send(result, this.#channel, this, new Date());
  }

  async hostVersion(): Promise<string> {
    return (
      ((await this.manifest()) || {})?.full?.host_version?.join?.(".") ??
      "Unknown"
    );
  }

  async manifest(): Promise<ManifestContent | null> {
    if (this.#manifestContent) return this.#manifestContent;

    const manifest = await fetch(
      `https://canary.discord.com/api/updates/distributions/app/manifests/latest?platform=win&channel=${
        this.#channel.displayType
      }&arch=x86`
    );
    if (!manifest.ok) return null;

    const manifestContent = await manifest.json();

    this.#manifestContent = manifestContent;
    return manifestContent;
  }
}
