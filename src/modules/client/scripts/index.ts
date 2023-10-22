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
import { Build } from "./Build.ts";
import { beautify, writeFile, rm, readFile } from "../../../utils.ts";
import type { Channel } from "../Channel.ts";
import { markdownTable } from "markdown-table";

export class Scripts implements Module {
  #files?: {
    scripts: File[];
    chunkLoader: File | null;
    classMappings: File | null;
    vendor: File | null;
    mainScript: File;
  };
  #build?: Build;
  #channel: Channel;

  constructor(channel: Channel) {
    this.#channel = channel;
  }

  get baseDir() {
    return join(this.#channel.baseDir, "scripts");
  }

  async build() {
    if (this.#build) return this.#build;

    this.#build = new Build(this.#channel, (await this.files()).mainScript);
    return this.#build;
  }

  async run() {
    console.log(`Scraping scripts for ${this.#channel.type}`);

    const files = await this.files();
    const build = await this.build();
    const manifest = await build.manifest();

    await rm(join(this.baseDir, "scripts"));

    const oldInfo = JSON.parse(
      (await readFile(join(this.#channel.baseDir, "info.json"))) ?? "{}"
    );

    // This is also related to stylesheets but we are getting it here
    await writeFile(
      join(this.#channel.baseDir, "info.json"),
      JSON.stringify(
        {
          buildNumber: await build.buildNumber(),
          versionHash: await build.versionHash(),
          hostVersion:
            manifest?.full.host_version.join(".") ?? oldInfo.hostVersion,
          builtAt: await build.builtAt(),
        },
        null,
        2
      )
    );

    // save only when manifest is available
    if (manifest) {
      await writeFile(
        join(this.#channel.baseDir, "README.md"),
        [
          `# ${this.#channel.name}`,
          "",
          "### Info",
          `Build number: ${await build.buildNumber()}`,
          `Version hash: ${await build.versionHash()}`,
          `Host version: ${manifest.full.host_version.join(".")}`,
          `Built at: ${new Date((await build.builtAt())!).toLocaleString()}`,
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
        join(this.#channel.baseDir, "manifest.json"),
        JSON.stringify(manifest, null, 2)
      );

      for (const [moduleName, moduleData] of Object.entries(manifest.modules)) {
        await writeFile(
          join(this.#channel.baseDir, "modules", moduleName, "info.json"),
          JSON.stringify(
            JSON.stringify({
              full: {
                host_version: moduleData.full.host_version.join("."),
                module_version: moduleData.full.module_version,
                package_sha256: moduleData.full.package_sha256,
                url: moduleData.full.url,
              },
              deltas: moduleData.deltas.map((delta) => ({
                host_version: delta.full.host_version.join("."),
                module_version: delta.full.module_version,
                package_sha256: delta.full.package_sha256,
                url: delta.full.url,
              })),
            }),
            null,
            2
          )
        );
      }
    }

    for (const file of files.scripts ?? []) {
      await writeFile(
        join(this.baseDir, "scripts", file.path),
        beautify(await file.content(), "js")
      );
    }

    await writeFile(
      join(this.baseDir, "main.js"),
      beautify(await files.mainScript!.content(), "js")
    );

    if (files.chunkLoader) {
      await writeFile(
        join(this.baseDir, "chunk_loader.js"),
        beautify(await files.chunkLoader.content(), "js")
      );
    }

    if (files.classMappings) {
      await writeFile(
        join(this.baseDir, "class_mappings.js"),
        beautify(await files.classMappings.content(), "js")
      );
    }

    if (files.vendor) {
      await writeFile(
        join(this.baseDir, "vendor.js"),
        beautify(await files.vendor.content(), "js")
      );
    }
  }

  async files() {
    if (this.#files) return this.#files;

    const res = await (await fetch(`${this.#channel.baseUrl}/login`)).text();

    const scripts = res
      .match(/<script src="\/assets\/[a-z0-9]+\.js"[^>]+><\/script>/g)
      ?.map((s) => s.match(/src="[^"]+"/g)?.[0].slice(13, -1))
      ?.map((s) => new File(s!))!;

    this.#files = {
      scripts,
      chunkLoader: scripts?.[0] ?? null,
      classMappings: scripts.length > 2 ? scripts?.[1] ?? null : null,
      vendor: scripts.length > 3 ? scripts?.[2] ?? null : null,
      mainScript: scripts?.[scripts.length - 1]!,
    };

    return this.#files;
  }
}
