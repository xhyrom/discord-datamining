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

  const addedExperiments = currentExperiments.filter(
    (e) => !oldExperiments.some((o) => o.hash === e.hash)
  );

  const removedExperiments = oldExperiments.filter(
    (e) => !currentExperiments.some((o) => o.hash === e.hash)
  );

  const changedExperiments = currentExperiments.filter((e) =>
    oldExperiments.some((o) => o.hash === e.hash && !deepEqual(o, e))
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
        "1104694113078608033"
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
        "1104694113078608033"
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
        (e) => e.hash === experiment.hash
      );

      const currentExperiment = currentExperiments.find(
        (e) => e.hash === experiment.hash
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
          experiment.treatments ?? []
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
