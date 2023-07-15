import { join } from "node:path";
import { File } from "../File.ts";
import type { Module } from "../../index.ts";
import {
  beautify,
  writeFile,
  rm,
  postToDiscord,
  getWebhookFromEnv,
  octokit,
} from "../../../utils.ts";
import { ChannelType, type Channel } from "../Channel.ts";
import type { PushResult } from "simple-git";

export class Stylesheets implements Module {
  #files?: {
    stylesheets: File[];
    mainStylesheet: File;
  };
  #channel: Channel;

  constructor(channel: Channel) {
    this.#channel = channel;
  }

  get baseDir() {
    return join(this.#channel.baseDir, "stylesheets");
  }

  async run() {
    console.log(`Scraping stylesheets for ${this.#channel.type}`);

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

    // Stylesheets diff is posted in Channel#run
  }

  async diff(result: PushResult, channel: Channel) {
    if (this.#channel.type !== ChannelType.Canary) return;

    const diff = await channel.diff(result);
    if (!diff) return;

    const currentCssFile = diff.data.files?.find((f) =>
      f.filename.includes("main.css")
    );
    if (!currentCssFile || !currentCssFile.patch) return;

    const desc = `\`\`\`diff\n${currentCssFile.patch}\n\`\`\``;

    await postToDiscord(
      getWebhookFromEnv("DISCORD_WEBHOOK_STYLESHEETS"),
      result.update?.hash.to,
      {
        content: `<@&1105847524662706226>\n${
          desc.length > 2000 ? desc.slice(0, 1968) + "...```" : desc
        }`,
      }
    );
  }

  async files() {
    if (this.#files) return this.#files;

    const res = await (await fetch(`${this.#channel.baseUrl}/login`)).text();

    const stylesheets = res
      .match(/<link rel="stylesheet" href="\/assets\/[a-z0-9.]+\.css"[^>]+>/g)
      ?.map((s) => s.match(/href="[^"]+"/g)?.[0].slice(14, -1))
      ?.map((s) => new File(s!))!;

    this.#files = {
      stylesheets,
      mainStylesheet: stylesheets?.slice(-1)[0]!,
    };

    return this.#files;
  }
}
