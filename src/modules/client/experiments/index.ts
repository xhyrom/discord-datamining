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
import type { Module } from "../../index.ts";
import { Client } from "../index.ts";
import {
  formatNumber,
  octokit,
  pushToGit,
  readFile,
  rm,
  writeFile,
} from "../../../utils.ts";
import { Experiment } from "./Experiment.ts";
import deepEqual from "fast-deep-equal";
import { parse as csvParse } from "csv-parse/sync";
import { stringify as csvStringify } from "csv-stringify/sync"; 
import { send } from "./sender/index.ts";

export interface Diff {
  addedExperiments: Experiment[];
  removedExperiments: Experiment[];
  updatedExperiments: {
    before: Experiment;
    after: Experiment;
  }[];
  firstRolloutBeganExperiments: Experiment[];
}

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

    const oldExperiments = JSON.parse(
      (await readFile(join(this.baseDir, "experiments.json"))) ?? "[]"
    ).map((e: any) => new Experiment(e));
    const experimentsDatabase = (await readFile(join(this.baseDir, "experiments.csv"))) ?? "id,hash,label";
    const experimentsDatabaseCache = csvParse(experimentsDatabase, {
        columns: false,
        skip_empty_lines: true,
    }) as { id: string; hash: string; label: string; }[];

    await writeFile(
      join(this.baseDir, "experiments.json"),
      JSON.stringify(experiments, null, 2)
    );

    await rm(join(this.baseDir, "experiments"));

    for (const experiment of experiments) {
      await writeFile(
        join(
          this.baseDir,
          "experiments",
          experiment.data.hash.toString(),
          "data.json"
        ),
        JSON.stringify(experiment, null, 2)
      );

      if (experiment.data.id) {
        const dbEntry = experimentsDatabaseCache.find(e => e.hash === experiment.data.hash.toString());
        if (!dbEntry) {
            experimentsDatabaseCache.push({
                label: experiment.data.label ?? "",
                id: experiment.data.id,
                hash: experiment.data.hash.toString()
            });

            continue;
        }
        
        dbEntry.label = experiment.data.label ?? "";
        dbEntry.id = experiment.data.id;
        dbEntry.hash = experiment.data.hash.toString();
      }
    }

    const newExperimentsDatabase = [
      ["id", "hash", "label"]
    ];

    for (const dbEntry of experimentsDatabaseCache) {
      newExperimentsDatabase.push(Object.values(dbEntry));
    }

    await writeFile(
      join(
        this.baseDir,
        "experiments.csv"
      ),
      csvStringify(newExperimentsDatabase)
    );

    const result = await pushToGit(
      `🧪 Experiments were updated`,
      `Experiments (${formatNumber(experiments.length)}):\n${experiments
        .map((experiment) => {
          if (!experiment.data.label && !experiment.data.id)
            return `unknown (${experiment.data.hash})`;

          return experiment.data.label
            ? `${experiment.data.label} - ${experiment.data.id} (${experiment.data.hash})`
            : `${experiment.data.id} (${experiment.data.hash})`;
        })
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    const diff = await this.diff(
      result.update.hash.from,
      result.update.hash.to,
      oldExperiments,
      experiments
    );

    await send(diff, result);
  }

  async experiments(): Promise<Experiment[] | null> {
    const experiments = await fetch(
      "https://api.distools.xhyrom.dev/v2/experiments?also_with_unknown_ids=true"
    );
    if (!experiments.ok) return null;

    const json = await experiments.json();
    return json.map((e: any) => new Experiment(e));
  }

  private async diff(
    before: string,
    after: string,
    oldExperiments: Experiment[],
    newExperiments: Experiment[]
  ): Promise<Diff> {
    const diff = await octokit.repos.compareCommits({
      owner: "xHyroM",
      repo: "discord-datamining",
      base: before,
      head: after,
    });

    const removedExperiments = [];
    const updatedExperiments = [];
    const addedExperiments = [];
    const firstRolloutBeganExperiments = [];

    for (const oldExperiment of oldExperiments) {
      const newExperiment = newExperiments.find(
        (a) => a.hash === oldExperiment.hash
      );

      if (!newExperiment) {
        removedExperiments.push(oldExperiment);
        continue;
      }

      if (!deepEqual(oldExperiment, newExperiment)) {
        newExperiment.diff = diff.data.files?.find(
          (f) =>
            f.filename ===
            `data/client/experiments/experiments/${newExperiment.hash}/data.json`
        )?.patch;

        updatedExperiments.push({
          before: oldExperiment,
          after: newExperiment,
        });

        if (!oldExperiment.rollout && newExperiment.rollout) {
          firstRolloutBeganExperiments.push(newExperiment);
        }
      }
    }

    for (const newExperiment of newExperiments) {
      const oldExperiment = oldExperiments.find(
        (a) => a.hash === newExperiment.hash
      );

      if (!oldExperiment) {
        addedExperiments.push(newExperiment);
      }
    }

    return {
      removedExperiments,
      updatedExperiments,
      addedExperiments,
      firstRolloutBeganExperiments,
    };
  }
}
