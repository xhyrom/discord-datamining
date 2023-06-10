import type { File } from "../File.ts";

export class Build {
  script: File;
  #content?: string = undefined;

  constructor(script: File) {
    this.script = script;
  }

  async buildNumber() {
    const content = await this.data();
    const buildNumber = Array.from(
      content.matchAll(/buildNumber:\s*"(?<number>[0-9]+)"/g)
    )[0]?.groups?.number;
    return buildNumber;
  }

  async versionHash() {
    const content = await this.data();
    const versionHash = Array.from(
      content.matchAll(/versionHash:\s*"(?<hash>(.*?))"/g)
    )[0]?.groups?.hash;
    return versionHash;
  }

  async buildAt() {
    const content = await this.data();
    const buildAt = Array.from(
      content.matchAll(
        /"builtAt",\s*(?:String\("(?<timestamp>[^"]+)"\)|"(?<value>[^"]+)")\s*/g
      )
    )[0]?.groups?.timestamp;
    return buildAt;
  }

  async data() {
    if (this.#content) return this.#content;

    const content = await this.script.content();
    this.#content = content;

    return content;
  }
}
