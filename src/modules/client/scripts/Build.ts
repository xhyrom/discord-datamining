import type { File } from "../File.ts";

export class Build {
  script: File;
  #content?: string;
  #buildNumber?: string | undefined;
  #versionHash?: string | undefined;
  #builtAt?: number | null;

  constructor(script: File) {
    this.script = script;
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
