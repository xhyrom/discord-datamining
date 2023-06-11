import { join } from "node:path";
import type { Module } from "../../index.ts";
import { Client } from "../index.ts";
import { writeFile } from "../../../utils.ts";

export class Experiments implements Module {
  get baseDir() {
    return join(Client.baseDir, "experiments");
  }

  async run() {
    console.log("Scraping experiments");

    const experiments = await this.experiments();
    if (!experiments) {
      console.log("Potentional outage, failed to fetch experiments");
      return;
    }

    await writeFile(
      join(this.baseDir, "experiments.json"),
      JSON.stringify(experiments, null, 2)
    );

    for (const experiment of experiments) {
      await writeFile(
        join(this.baseDir, experiment.data.hash.toString(), "data.json"),
        JSON.stringify(experiment, null, 2)
      );
    }
  }

  async experiments() {
    const experiments = await fetch(
      "https://api.distools.xhyrom.dev/v2/experiments?also_with_unknown_ids=true"
    );
    if (!experiments.ok) return null;

    const json = await experiments.json();
    return json;
  }
}
