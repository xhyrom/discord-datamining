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
import { BuildResolver } from "./BuildResolver.ts";
import { beautify, writeFile, rm } from "../../../../utils.ts";
import type { WebBuild } from "../index.ts";

export class Scripts implements Module {
  #files?: {
    scripts: File[];
    mainScript: File;
    strings: File | null;
    endpoints: File | null;
    sentry: File | null;
    html: string;
  };
  #build?: Build;
  #webBuild: WebBuild;

  constructor(webBuild: WebBuild) {
    this.#webBuild = webBuild;
  }

  get baseDir() {
    return join(this.#webBuild.baseDir, "scripts");
  }

  async build(): Promise<Build> {
    if (this.#build) return this.#build;

    const files = await this.files();
    const build = new Build();

    for (const file of [files.mainScript, ...files.scripts]) {
      if (build.filled()) break;

      const resolver = new BuildResolver(this.#webBuild.channel, file);

      const buildNumber = await resolver.buildNumber();
      const versionHash = await resolver.versionHash();
      const builtAt = await resolver.builtAt();

      if (buildNumber) build.buildNumber = buildNumber;
      if (versionHash) build.versionHash = versionHash;
      if (builtAt) build.builtAt = builtAt;
    }

    this.#build = build;
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
          build_number: build.buildNumber,
          version_hash: build.versionHash,
          built_at: build.builtAt,
        },
        null,
        2
      )
    );

    await writeFile(
      join(this.baseDir, "index.html"),
      beautify(files.html, "html")
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

    if (files.strings) {
      await writeFile(
        join(this.baseDir, "strings.js"),
        beautify(await files.strings.content(), "js")
      );
    }

    if (files.endpoints) {
      await writeFile(
        join(this.baseDir, "routes.js"),
        beautify(await files.endpoints.content(), "js")
      );
    }

    if (files.sentry) {
      await writeFile(
        join(this.baseDir, "sentry.js"),
        beautify(await files.sentry.content(), "js")
      );
    }
  }

  async files() {
    if (this.#files) return this.#files;

    const res = await (
      await fetch(`${this.#webBuild.channel.baseUrl}/login`)
    ).text();

    const scripts = res
      .match(/<script src="\/assets\/[a-z0-9.]+\.js"[^>]+><\/script>/g)
      ?.map((s) => s.match(/src="[^"]+"/g)?.[0].slice(13, -1))
      ?.map((s) => new File(s!))!;

    let mainScript;
    let stringsScript;
    let endpointsScript;
    let sentryScript;
    for (const script of scripts) {
      if (script.name.startsWith("web.")) {
        mainScript = script;
        stringsScript = script;
        endpointsScript = script;
      }

      if (script.name.startsWith("sentry.")) {
        sentryScript = script;
      }
    }

    if (!mainScript) {
      console.log("DISCORD FUCKED UP EVERYHING AGAIN");
      process.exit(1);
    }

    console.log("Found scripts");
    console.log(`Main Script: ${mainScript?.path}`);
    console.log(`Strings: ${stringsScript?.path}`);
    console.log(`Routes: ${endpointsScript?.path}`);
    console.log(`Sentry: ${sentryScript?.path}`);

    this.#files = {
      scripts,
      mainScript: mainScript!, // contains build info
      strings: stringsScript ?? null, // contains all strings
      endpoints: endpointsScript ?? null, // contains all endpoints
      sentry: sentryScript ?? null, // sentry shit
      html: res,
    };

    return this.#files;
  }
}
