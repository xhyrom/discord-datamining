import { join } from "node:path";

import { File } from "../File.ts";
import type { Module } from "../../index.ts";
import { Build } from "./Build.ts";
import { beautify, writeFile, rm } from "../../../utils.ts";
import type { Channel } from "../Channel.ts";

export class Scripts implements Module {
  #files?: {
    scripts: File[];
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

    this.#build = new Build((await this.files()).mainScript);
    return this.#build;
  }

  async run() {
    console.log(`Scraping scripts for ${this.#channel.type}`);

    const files = await this.files();
    const build = await this.build();

    await rm(join(this.baseDir, "scripts"));

    // This is also related to stylesheets but we are getting it here
    await writeFile(
      join(this.#channel.baseDir, "info.json"),
      JSON.stringify(
        {
          buildNumber: await build.buildNumber(),
          builtAt: await build.builtAt(),
          versionHash: await build.versionHash(),
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
      mainScript: scripts?.slice(-1)[0]!,
    };

    return this.#files;
  }
}
