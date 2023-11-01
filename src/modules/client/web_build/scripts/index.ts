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
import { Build } from "./Build.ts";
import { beautify, writeFile, rm } from "../../../../utils.ts";
import type { WebBuild } from "../index.ts";

export class Scripts implements Module {
  #files?: {
    scripts: File[];
    chunkLoader: File | null;
    classMappings: File | null;
    vendor: File | null;
    routes: File | null;
    strings: File | null;
    mainScript: File;
  };
  #build?: Build;
  #webBuild: WebBuild;

  constructor(webBuild: WebBuild) {
    this.#webBuild = webBuild;
  }

  get baseDir() {
    return join(this.#webBuild.baseDir, "scripts");
  }

  async build() {
    if (this.#build) return this.#build;

    this.#build = new Build(
      this.#webBuild.channel,
      (await this.files()).mainScript
    );
    return this.#build;
  }

  async run() {
    console.log(`Scraping scripts for ${this.#webBuild.channel.type}`);

    const files = await this.files();
    const build = await this.build();

    await rm(join(this.baseDir, "scripts"));

    await writeFile(
      join(this.#webBuild.baseDir, "web_build.json"),
      JSON.stringify(
        {
          build_number: await build.buildNumber(),
          version_hash: await build.versionHash(),
          built_at: await build.builtAt(),
        },
        null,
        2
      )
    );

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

    if (files.routes) {
      await writeFile(
        join(this.baseDir, "routes.js"),
        beautify(await files.routes.content(), "js")
      );
    }

    if (files.strings) {
      await writeFile(
        join(this.baseDir, "strings.js"),
        beautify(await files.strings.content(), "js")
      );
    }
  }

  async files() {
    if (this.#files) return this.#files;

    const res = await (
      await fetch(`${this.#webBuild.channel.baseUrl}/login`)
    ).text();

    const scripts = res
      .match(/<script src="\/assets\/[a-z0-9]+\.js"[^>]+><\/script>/g)
      ?.map((s) => s.match(/src="[^"]+"/g)?.[0].slice(13, -1))
      ?.map((s) => new File(s!))!;

    let mainScript;
    let stringsScript;
    let classMappingsScript;
    let vendorScript;
    let routesScript;
    for (const script of scripts) {
      const content = await script.content();
      if (content.match(/buildNumber:\s*"(?<number>[0-9]+)"/g)?.length === 1) {
        mainScript = script;
        continue;
      }

      if (content.match(/(DISCORD:\s*["']Discord["'])/g)?.length === 1) {
        stringsScript = script;
        continue;
      }

      if (content.match(/"heading-lg\/bold":\s*/g)?.length === 1) {
        classMappingsScript = script;
        continue;
      }

      if (content.match(/setServerDeaf:\s*/g)?.length === 1) {
        vendorScript = script;
        continue;
      }

      if (content.match(/(ME:\s*["']\/users\/@me["'])/g)?.length === 1) {
        routesScript = script;
        continue;
      }
    }

    if (!mainScript) {
      console.log("DISCORD FUCKED UP EVERYHING AGAIN");
      process.exit(1);
    }

    console.log("Found scripts");
    console.log(`Class Mappings: ${classMappingsScript?.path}`);
    console.log(`Chunk Loader: ${scripts?.[scripts.length - 1]?.path}`);
    console.log(`Vendor: ${vendorScript?.path}`);
    console.log(`Routes: ${routesScript?.path}`);
    console.log(`Strings: ${stringsScript?.path}`);
    console.log(`Main Script: ${mainScript?.path}`);

    this.#files = {
      scripts,
      classMappings: classMappingsScript ?? null, // contains css classes
      chunkLoader: scripts?.[scripts.length - 1] ?? null,
      vendor: vendorScript ?? null,
      routes: routesScript ?? null,
      strings: stringsScript ?? null, // contains all strings
      mainScript: mainScript!, // contains build info
    };

    return this.#files;
  }
}
