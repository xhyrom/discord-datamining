export class File {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  get name() {
    return this.path.split(".").slice(0, -1).join(".");
  }

  get extension() {
    return this.path.split(".").pop()!;
  }

  async content() {
    return await (
      await fetch(`https://canary.discord.com/assets/${this.path}`)
    ).text();
  }
}
