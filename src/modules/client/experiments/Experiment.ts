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

import type { Experiment as ExperimentType, Population } from "./types";
import { andList, colorFromName, nameFormat, parseFilter } from "./utils.ts";

export class Experiment {
  public data: ExperimentType["data"];
  public rollout: ExperimentType["rollout"];
  #diff?: string | undefined;

  constructor(experiment: ExperimentType) {
    this.data = experiment.data;
    this.rollout = experiment.rollout;
  }

  get hash() {
    return this.data.hash;
  }

  get formattedPopulations() {
    return this.formatPopulations(this.rollout?.populations ?? []);
  }

  get formattedOverrides() {
    if (!this.rollout) return "";

    return Object.entries(this.rollout.overrides)
      .map(([name, value]) => `**${nameFormat(name)}**: ${value.join(", ")}`)
      .join("\n\n");
  }

  get formattedOverridesFormatted() {
    return this.formatPopulations(this.rollout?.overrides_formatted ?? []);
  }

  get diff() {
    return this.#diff;
  }

  set diff(diff: string | undefined) {
    this.#diff = diff;
  }

  private formatPopulations(populations: Population[]) {
    let format = "";

    for (const population of populations) {
      const filters =
        population.filters.length !== 0
          ? `**Filter**: ${andList.format(
              population.filters.map((f) => parseFilter(f))
            )}`
          : "";

      if (filters) format += `${filters}\n`;

      if (Object.keys(population.buckets).length > 0) {
        format += "```ansi\n";
      }

      for (const [bucketName, bucketValue] of Object.entries(
        population.buckets
      ).sort((a, b) => {
        if (a[0] === "none") return -1;
        if (b[0] === "none") return 1;
        return 0;
      })) {
        const percentage =
          bucketValue.rollout.reduce(
            (total, range) => total + range.end - range.start,
            0
          ) / 100;
        format += [
          `${colorFromName(bucketName)}${nameFormat(
            bucketName
          )}: ${percentage}% (${bucketValue.rollout
            .map((r) => `${r.start}-${r.end}`)
            .join(", ")})\x1b[0m`,
          "",
        ].join("\n");
      }

      if (Object.keys(population.buckets).length > 0) {
        format += "```\n";
      }
    }

    return format.length > 1024 ? format.slice(0, 1021) + "..." : format;
  }
}
