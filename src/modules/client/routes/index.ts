import { join } from "node:path";
import type { Module } from "../../index.ts";
import { Client } from "../index.ts";
import { writeFile } from "../../../utils.ts";

export class Routes implements Module {
  get baseDir() {
    return join(Client.baseDir);
  }

  async run() {
    const routes = await fetch("https://api.distools.xhyrom.dev/v2/routes");
    if (!routes.ok) {
      console.log("Potentional outage, failed to fetch routes");
      return;
    }

    const json = await routes.json();

    await writeFile(
      join(this.baseDir, "routes.json"),
      JSON.stringify(json, null, 2)
    );
  }
}
