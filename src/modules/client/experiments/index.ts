import { join } from "node:path";
import type { Module } from "../../index.ts";
import { Client } from "../index.ts";
import {
  chunk,
  formatNumber,
  getWebhookFromEnv,
  maximumStringLen,
  octokit,
  postToDiscord,
  pushToGit,
  readFile,
  rm,
  writeFile,
} from "../../../utils.ts";
import { Experiment } from "./Experiment.ts";
import deepEqual from "fast-deep-equal";
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10";
import { EmbedBuilder } from "@discordjs/builders";

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
    }

    const result = await pushToGit(
      `🧪 Experiments were updated`,
      `Experiments (${formatNumber(experiments.length)}):\n${experiments
        .map((experiment) => experiment.name)
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    const diff = await this.diff(
      result.update.hash.from,
      result.update.hash.to,
      oldExperiments,
      experiments
    );

    const embeds: APIEmbed[] = [];

    for (const post of diff.addedExperiments) {
      embeds.push(this.buildEmbed("New", post).setColor(0x2cde5c).toJSON());
    }

    for (const post of diff.removedExperiments) {
      embeds.push(this.buildEmbed("Removed", post).setColor(0xde2c2c).toJSON());
    }

    for (const post of diff.updatedExperiments) {
      if (!post.diff) continue;

      embeds.push(
        this.buildEmbed("Updated", post)
          .setDescription(
            maximumStringLen(`\`\`\`diff\n${post.diff}\n\`\`\``, 4096)
          )
          .setColor(0x2c5cde)
          .toJSON()
      );
    }

    const embedsPerTen = chunk(embeds, 10);

    for (const embeds of embedsPerTen) {
      await postToDiscord(
        getWebhookFromEnv("DISCORD_WEBHOOK_EXPERIMENTS"),
        result?.update?.hash.to,
        {
          content: "<@&1105589221185568851>",
          embeds,
        }
      );
    }
  }

  async experiments(): Promise<Experiment[] | null> {
    const experiments = await fetch(
      "https://api.distools.xhyrom.dev/v2/experiments?also_with_unknown_ids=true"
    );
    if (!experiments.ok) return null;

    const json = await experiments.json();
    return json.map((e: any) => new Experiment(e));
  }

  private buildEmbed(action: string, experiment: Experiment) {
    const fields = [
      {
        name: "Label",
        value: experiment.data.label ?? "unknown",
        inline: true,
      },
      {
        name: "Id",
        value: experiment.data.id ?? "unknown",
        inline: true,
      },
      {
        name: "Hash",
        value: experiment.data.hash.toString(),
        inline: true,
      },
      {
        name: "Kind",
        value: experiment.data.kind,
        inline: true,
      },
      {
        name: "Treatments",
        value: experiment.data.description?.join?.("\n"),
      },
      {
        name: "Populations",
        value: experiment.formattedPopulations,
      },
      {
        name: "Overrides",
        value: experiment.formattedOverrides,
      },
      {
        name: "Overrides Formatted",
        value: experiment.formattedOverridesFormatted,
      },
    ];

    // Keep only fields with a value
    const possibleFields = fields.filter((f) => f.value) as APIEmbedField[];

    return new EmbedBuilder()
      .setTitle(`${action} Experiment`)
      .addFields(possibleFields);
  }

  private async diff(
    before: string,
    after: string,
    oldExperiments: Experiment[],
    newExperiments: Experiment[]
  ): Promise<{
    removedExperiments: Experiment[];
    updatedExperiments: Experiment[];
    addedExperiments: Experiment[];
  }> {
    const diff = await octokit.repos.compareCommits({
      owner: "xHyroM",
      repo: "discord-datamining",
      base: before,
      head: after,
    });

    const removedExperiments = [];
    const updatedExperiments = [];
    const addedExperiments = [];

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

        updatedExperiments.push(newExperiment);
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
    };
  }
}
