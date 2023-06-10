import { join } from "node:path";
import { Client } from "../index.ts";
import { File } from "../File.ts";
import type { Module } from "../../index.ts";
import { beautify, writeFile, rm } from "../../../utils.ts";

export class Stylesheets implements Module {
  get baseDir() {
    return join(Client.baseDir, "stylesheets");
  }

  async run() {
    const files = await this.files();

    await rm(join(this.baseDir, "stylesheets"));

    for (const file of files.stylesheets ?? []) {
      await writeFile(
        join(this.baseDir, "stylesheets", file.path),
        beautify(await file.content(), "css")
      );
    }

    await writeFile(
      join(this.baseDir, "main.css"),
      beautify(await files.mainStylesheet!.content(), "css")
    );
  }

  async files() {
    const res = await (await fetch("https://canary.discord.com/login")).text();

    const stylesheets = res
      .match(/<link rel="stylesheet" href="\/assets\/[a-z0-9.]+\.css"[^>]+>/g)
      ?.map((s) => s.match(/href="[^"]+"/g)?.[0].slice(14, -1))
      ?.map((s) => new File(s!));

    return {
      stylesheets,
      mainStylesheet: stylesheets?.slice(-1)[0],
    };
  }
}
