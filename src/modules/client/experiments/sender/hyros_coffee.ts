import type { PushResult } from "simple-git";
import type { Sender } from ".";
import {
  chunk,
  getWebhookFromEnv,
  maximumStringLen,
  postToDiscord,
} from "../../../../utils.ts";
import type { Diff } from "../.";
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10";
import type { Experiment } from "../Experiment.ts";
import { EmbedBuilder } from "@discordjs/builders";

export class HyrosCoffeeSender implements Sender {
  async send(diff: Diff, result: PushResult) {
    const embeds: APIEmbed[] = [];

    for (const exp of diff.addedExperiments) {
      embeds.push(
        this.buildEmbed(
          {
            before: "New",
          },
          exp
        )
          .setColor(0x2cde5c)
          .toJSON()
      );
    }

    for (const exp of diff.removedExperiments) {
      embeds.push(
        this.buildEmbed(
          {
            after: "Removed",
          },
          exp
        )
          .setColor(0xde2c2c)
          .toJSON()
      );
    }

    for (const exp of diff.updatedExperiments) {
      if (!exp.after.diff) continue;

      embeds.push(
        this.buildEmbed(
          {
            after: "Updated",
          },
          exp.after
        )
          .setDescription(
            maximumStringLen(`\`\`\`diff\n${exp.after.diff}\n\`\`\``, 4096)
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

  private buildEmbed(
    title: {
      before?: string | null;
      after?: string | null;
    },
    experiment: Experiment
  ) {
    const fields = [
      {
        name: "Label",
        value: experiment.data.label ?? "unknown",
      },
      {
        name: "Id",
        value: experiment.data.id ?? "unknown",
      },
      {
        name: "Hash",
        value: experiment.data.hash.toString(),
      },
      {
        name: "Kind",
        value: experiment.data.kind,
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
      .setTitle(
        `${title.before ? `${title.before} ` : ""}Experiment${
          title.after ? ` ${title.after}` : ""
        }`
      )
      .addFields(possibleFields);
  }
}
