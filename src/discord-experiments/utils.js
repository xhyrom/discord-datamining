// Adopted from https://gitlab.com/derpystuff/discord-experiments/-/blob/main/index.js
import deepEqual from "fast-deep-equal";
import { EmbedBuilder, disableValidators } from "@discordjs/builders";
import { info } from "../logger.js";
import { send } from "./webhooks.js";
import {
  experimentNameFormat,
  populationsFormat,
  overridesFormat,
} from "./formatters.js";
import { getObjectDiff } from "./diff.js";
disableValidators();

/**
 * @param {unknown[]} oldExperiments
 * @param {unknown[]} currentExperiments
 * @param {string} webhookId
 * @param {string} webhookToken
 */
export const watcher = (
  oldExperiments,
  currentExperiments,
  webhookId,
  webhookToken
) => {
  if (deepEqual(oldExperiments, currentExperiments)) return;

  const oldExperimentsHash = oldExperiments.map((e) => e.hash);
  const currentExperimentsHash = currentExperiments.map((e) => e.hash);

  const addedExperiments = currentExperimentsHash.filter(
    (key) => !oldExperimentsHash.includes(key)
  );

  const removedExperiments = oldExperimentsHash.filter(
    (key) => !currentExperimentsHash.includes(key)
  );

  const changedExperiments = currentExperimentsHash.filter((key) => {
    if (!oldExperimentsHash.includes(key)) return false;
    return !deepEqual(
      oldExperiments.find((e) => e.hash === key),
      currentExperiments.find((e) => e.hash === key)
    );
  });

  if (addedExperiments.length > 0) {
    info(
      `Added Experiments: ${addedExperiments
        .map((key) =>
          experimentNameFormat(currentExperiments.find((e) => e.hash === key))
        )
        .join(", ")}`
    );

    for (const experimentKey of addedExperiments) {
      send(
        webhookId,
        webhookToken,
        [
          defaultEmbed(
            currentExperiments.find((e) => e.hash === experimentKey),
            "add"
          )
            .setColor(0x51f542)
            .toJSON(),
        ],
        "1104694113078608033"
      );
    }
  }

  if (removedExperiments.length > 0) {
    info(
      `Removed Experiments: ${removedExperiments
        .map((key) =>
          experimentNameFormat(currentExperiments.find((e) => e.hash === key))
        )
        .join(", ")}`
    );

    for (const experimentKey of removedExperiments) {
      send(
        webhookId,
        webhookToken,
        [
          defaultEmbed(
            currentExperiments.find((e) => e.hash === experimentKey),
            "remove"
          )
            .setColor(0xf53731)
            .toJSON(),
        ],
        "1104694113078608033"
      );
    }
  }

  if (changedExperiments.length > 0) {
    info(
      `Changed Experiments: ${changedExperiments
        .map((key) =>
          experimentNameFormat(currentExperiments.find((e) => e.hash === key))
        )
        .join(", ")}`
    );

    for (const experimentKey of changedExperiments) {
      const oldExperiment = oldExperiments.find(
        (e) => e.hash === experimentKey
      );
      const currentExperiment = currentExperiments.find(
        (e) => e.hash === experimentKey
      );

      send(
        webhookId,
        webhookToken,
        [
          defaultEmbed(
            currentExperiment,
            "change",
            getObjectDiff(oldExperiment, currentExperiment).join("\n\n")
          )
            .setColor(0xe8c61a)
            .toJSON(),
        ],
        "1104694113078608033"
      );
    }
  }
};

/**
 * @param {any} experiment
 * @param {string} action
 * @param {string} diff
 * @returns
 */
const defaultEmbed = (experiment, action, diff = "") => {
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
      value: experiment.kind,
      inline: true,
    },
    {
      name: "Populations",
      value:
        populationsFormat(
          experiment.rollout?.populations ?? [],
          experiment.treatments
        ) || "None",
      inline: false,
    },
    {
      name: "Overrides",
      value: overridesFormat(experiment.rollout?.overrides ?? {}) || "None",
      inline: false,
    },
  ];

  if (diff !== "") {
    fields.push({
      name: "Changes",
      value: `\`\`\`diff\n${diff}\n\`\`\``,
      inline: false,
    });
  }

  return new EmbedBuilder().setTitle(title).addFields(...fields);
};
