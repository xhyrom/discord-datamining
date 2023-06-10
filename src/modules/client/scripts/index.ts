import { join } from "node:path";

import { Client } from "../index.ts";
import { File } from "../File.ts";
import type { Module } from "../../index.ts";
import { Build } from "./Build.ts";
import { beautify, writeFile, rm } from "../../../utils.ts";

export class Scripts implements Module {
  get baseDir() {
    return join(Client.baseDir, "scripts");
  }

  async run() {
    const files = await this.files();
    const build = new Build(files.mainScript!);

    await rm(join(this.baseDir, "scripts"));

    await writeFile(
      join(this.baseDir, "info.json"),
      JSON.stringify(
        {
          buildNumber: await build.buildNumber(),
          buildAt: await build.buildAt(),
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
    const res = await (await fetch("https://canary.discord.com/login")).text();

    const scripts = res
      .match(/<script src="\/assets\/[a-z0-9]+\.js"[^>]+><\/script>/g)
      ?.map((s) => s.match(/src="[^"]+"/g)?.[0].slice(13, -1))
      ?.map((s) => new File(s!));

    return {
      scripts,
      mainScript: scripts?.slice(-1)[0],
    };
  }
}
