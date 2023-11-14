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

import type { File } from "../../File.js";
import type { Channel } from "../../Channel.js";

export class BuildResolver {
  script: File;
  channel: Channel;
  #content?: string;
  #buildNumber?: string | undefined;
  #versionHash?: string | undefined;
  #builtAt?: number | null;

  constructor(channel: Channel, script: File) {
    this.script = script;
    this.channel = channel;
  }

  async buildNumber() {
    if (this.#buildNumber) return this.#buildNumber;

    const content = await this.data();
    const buildNumber = Array.from(
      content.matchAll(/buildNumber:\s*"(?<number>[0-9]+)"/g)
    )[0]?.groups?.number;

    this.#buildNumber = buildNumber;
    return this.#buildNumber;
  }

  async versionHash() {
    if (this.#versionHash) return this.#versionHash;

    const content = await this.data();
    const versionHash = Array.from(
      content.matchAll(/versionHash:\s*"(?<hash>(.*?))"/g)
    )[0]?.groups?.hash;

    this.#versionHash = versionHash;
    return this.#versionHash;
  }

  async builtAt() {
    if (this.#builtAt) return this.#builtAt;

    const content = await this.data();
    const builtAt = Array.from(
      content.matchAll(
        /"builtAt",\s*(?:String\("(?<timestamp>[^"]+)"\)|"(?<value>[^"]+)")\s*/g
      )
    )[0]?.groups?.timestamp;

    this.#builtAt = builtAt ? parseInt(builtAt) : null;
    return this.#builtAt;
  }

  async data() {
    if (this.#content) return this.#content;

    const content = await this.script.content();
    this.#content = content;

    return content;
  }
}
