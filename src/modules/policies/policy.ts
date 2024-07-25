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
import { beautify, writeFile } from "../../utils.ts";
import { JSDOM } from "jsdom";

export abstract class Policy {
  private baseDir: string;

  constructor(baseDir: string) {
    this.baseDir = baseDir;
  }

  abstract run(): Promise<void>;

  protected async writeFile(name: string, content: string) {
    await writeFile(join(this.baseDir, name), content);
  }

  protected async getHtmlContent(url: string): Promise<string | null> {
    const res = await fetch(url);
    if (!res.ok) return null;

    const dom = new JSDOM(await res.text());

    const scriptElements = [
      ...dom.window.document.querySelectorAll("script"),
      ...dom.window.document.querySelectorAll("noscript"),
    ];
    scriptElements.forEach((script) => script.remove());

    const body = dom.window.document
      .querySelector("body")
      ?.outerHTML?.replace(/(<!--.*?-->)/g, "");

    return body ? beautify(body, "html") : null;
  }
}
