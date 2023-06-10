import { join } from "node:path";
import type { Module } from "..";
import { DATA_DIR } from "../../utils.ts";
import { Scripts } from "./scripts/index.ts";
import { Stylesheets } from "./stylesheets/index.ts";
import { readFile } from "node:fs/promises";
import { Routes } from "./routes/index.ts";
import { Experiments } from "./experiments/index.ts";

export class Client implements Module {
  get baseDir() {
    return Client.baseDir;
  }

  static get baseDir() {
    return join(DATA_DIR, "client");
  }

  async run() {
    await new Routes().run();
    await new Experiments().run();
    await this.runScriptsAndStylesheets();
  }

  private async runScriptsAndStylesheets() {
    const latestVersionHash = await this.getVersionHash();
    const currentVersionHash = JSON.parse(
      (await readFile(join(this.baseDir, "scripts", "info.json"), "utf8")) ?? {}
    );
    if (
      latestVersionHash &&
      currentVersionHash &&
      latestVersionHash === currentVersionHash.versionHash
    ) {
      console.log(
        `Client %s (%s) is up to date`,
        currentVersionHash.buildNumber,
        currentVersionHash.versionHash
      );
      return;
    }

    await new Scripts().run();
    await new Stylesheets().run();
  }

  private async getVersionHash() {
    const res = await fetch(
      "https://canary.discord.com/assets/version.canary.json"
    );
    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    return json.hash;
  }
}
