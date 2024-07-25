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
import { DATA_DIR, formatNumber, pushToGit, writeFile } from "../../utils.ts";
import { File } from "../../File.ts";
import type { Module } from "..";

export class Acknowledgements implements Module {
  #file?: File;

  get baseDir() {
    return join(DATA_DIR, "acknowledgements");
  }

  async run() {
    const file = (await this.file())!;
    const content = await file.content();

    const matches = content.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g) || [];
    const acknowledgements = [];

    for (const input of matches) {
      const [_, name, link] = input.match(
        /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/,
      )!;

      acknowledgements.push({ name, link });
    }

    await writeFile(
      join(this.baseDir, `acknowledgements.json`),
      JSON.stringify(acknowledgements, null, 2),
    );

    await pushToGit(
      `💡 Acknowledgements has been updated`,
      `Acknowledgements (${formatNumber(
        acknowledgements.length,
      )}):\n${acknowledgements.map((key) => `${key.name}: ${key.link}`).join("\n")}`,
    );
  }

  async file() {
    if (this.#file) return this.#file;

    const res = await (
      await fetch(`https://canary.discord.com/acknowledgements`)
    ).text();

    const scripts = res
      .match(
        /<script[^>]+data-chunk="refresh-text_pages-Acknowledgements"[^>]*><\/script>/g,
      )
      ?.map((s) => s.match(/src="[^"]+"/g)?.[0].slice(13, -1))
      ?.map((s) => new File(s!))!;

    for (const script of scripts) {
      const content = await script.content();

      if (
        content.includes("https://github.com/babel") &&
        (content.match(/https:\/\/github\.com/g) || []).length > 50
      ) {
        this.#file = script;
      }
    }

    return this.#file;
  }
}
