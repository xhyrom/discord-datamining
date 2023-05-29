import deepEqual from "fast-deep-equal";
import { EmbedBuilder, disableValidators } from "@discordjs/builders";
import { info } from "../logger.js";
import { sendWebhook } from "../utils.js";
import {
  experimentNameFormat,
  populationsFormat,
  overridesFormat,
} from "./formatters.js";
import jsondiffpatch from "jsondiffpatch";
import { ButtonStyle, ComponentType } from "discord-api-types/v10";
disableValidators();

/**
 * @param {import("../types").Experiment[]} oldExperiments
 * @param {import("../types").Experiment[]} currentExperiments
 * @param {import("simple-git").PushResult} pushResult
 * @param {string} webhookId
 * @param {string} webhookToken
 */
export const watcher = (
  oldExperiments,
  currentExperiments,
  pushResult,
  webhookId,
  webhookToken
) => {
  if (deepEqual(oldExperiments, currentExperiments)) return;

  const addedExperiments = currentExperiments.filter(
    (e) => !oldExperiments.some((o) => o.data.hash === e.data.hash)
  );

  const removedExperiments = oldExperiments.filter(
    (e) => !currentExperiments.some((o) => o.data.hash === e.data.hash)
  );

  const changedExperiments = currentExperiments.filter((e) =>
    oldExperiments.some((o) => o.data.hash === e.data.hash && !deepEqual(o, e))
  );

  console.log(addedExperiments, removedExperiments, changedExperiments);
  console.log(oldExperiments, currentExperiments);

  if (addedExperiments.length > 0) {
    info(
      `Added Experiments: ${addedExperiments
        .map(experimentNameFormat)
        .join(", ")}`
    );

    for (const experiment of addedExperiments) {
      send(
        webhookId,
        webhookToken,
        [defaultEmbed(experiment, "add").setColor(0x51f542).toJSON()],
        pushResult
      );
    }
  }

  if (removedExperiments.length > 0) {
    info(
      `Removed Experiments: ${removedExperiments
        .map(experimentNameFormat)
        .join(", ")}`
    );

    for (const experiment of removedExperiments) {
      send(
        webhookId,
        webhookToken,
        [defaultEmbed(experiment, "remove").setColor(0xf53731).toJSON()],
        pushResult
      );
    }
  }

  if (changedExperiments.length > 0) {
    info(
      `Changed Experiments: ${changedExperiments
        .map(experimentNameFormat)
        .join(", ")}`
    );

    for (const experiment of changedExperiments) {
      const oldExperiment = oldExperiments.find(
        (e) => e.data.hash === experiment.data.hash
      );

      const currentExperiment = currentExperiments.find(
        (e) => e.data.hash === experiment.data.hash
      );

      const diff = jsondiffpatch.formatters.console.format(
        jsondiffpatch.diff(oldExperiment, currentExperiment) || {},
        oldExperiment
      );

      send(
        webhookId,
        webhookToken,
        [
          defaultEmbed(currentExperiment, "change").setColor(0xe8c61a).toJSON(),
          new EmbedBuilder()
            .setDescription(
              `\`\`\`rb\n${
                diff.length > 4083 ? diff.slice(0, 4080) + "..." : diff
              }\`\`\``
            )
            .toJSON(),
        ],
        pushResult
      );
    }
  }
};

/**
 * @param {any} experiment
 * @param {string} action
 * @returns
 */
const defaultEmbed = (experiment, action) => {
  let title = "";
  switch (action) {
    case "add":
      title = "New Experiment";
      break;
    case "remove":
      title = "Experiment Removed";
      break;
    case "change":
      title = "Experiment Updated";
  }

  const fields = [
    {
      name: "Name",
      value: experimentNameFormat(experiment),
      inline: true,
    },
    {
      name: "Kind",
      value: experiment.data.kind ?? "guild", // because old way of doing things
      inline: true,
    },
    {
      name: "Treatments",
      value: experiment.data.description?.join?.("\n") || "None",
      inline: false,
    },
    {
      name: "Populations",
      value: populationsFormat(experiment.rollout?.populations ?? []) || "None",
      inline: false,
    },
    {
      name: "Overrides",
      value: overridesFormat(experiment.rollout?.overrides ?? {}) || "None",
      inline: false,
    },
    {
      name: "Overrides Formatted",
      value:
        populationsFormat(experiment.rollout?.overrides_formatted ?? []) ||
        "None",
    },
  ];

  return new EmbedBuilder().setTitle(title).addFields(...fields);
};

/**
 *
 * @param {string} id
 * @param {string} token
 * @param {import("discord-api-types/v10.js").APIEmbed[]} embeds
 * @param {import("simple-git").PushResult} pushResult
 */
const send = async (id, token, embeds, pushResult) => {
  await sendWebhook(id, token, {
    content: "<@&1105589221185568851>",
    embeds,
    components: [
      {
        type: ComponentType.ActionRow,
        components: [
          {
            type: ComponentType.Button,
            label: "View on GitHub",
            style: ButtonStyle.Link,
            url: `https://github.com/xHyroM/discord-datamining/commit/${
              pushResult.update?.hash.to ?? ""
            }`,
          },
        ],
      },
    ],
  });
};
