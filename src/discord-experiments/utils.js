// Adopted from https://gitlab.com/derpystuff/discord-experiments/-/blob/main/index.js
import deepEqual from "fast-deep-equal";
import murmurhash from "murmurhash";
import { EmbedBuilder, disableValidators } from "@discordjs/builders";
import { readFile } from "node:fs/promises";
import { info } from "../logger.js";
import { send } from "./webhooks.js";
import {
  experimentNameFormat,
  populationsFormat,
  overridesFormat,
} from "./formatters.js";
import { join } from "node:path";
disableValidators();

const CURRENT_DISCORD_FILE = await readFile(join("data", "current.js"), "utf8");
const ALL_GUILD_EXPERIMENTS_CLIENT = CURRENT_DISCORD_FILE.match(
  /kind: "guild",\s+id: "(\S+)"/g
)?.map((m) => {
  return {
    kind: m.replace(/kind: "(\S+)",\s+id: "(\S+)"/g, "$1"),
    id: m.replace(/kind: "(\S+)",\s+id: "(\S+)"/g, "$2"),
  };
});

export const decodeGuildExperiment = (experiment) => {
  //Decodes Experiments
  const parsedExperiment = {
    hashKey: experiment[0],
    name:
      experiment[1] ??
      ALL_GUILD_EXPERIMENTS_CLIENT?.find(
        (clientExp) => murmurhash.v3(clientExp.id) === experiment[0]
      )?.id ??
      null,
    revision: experiment[2],
    populations: [],
  };

  const parsedPopulations = [];
  experiment[3].forEach(function (population) {
    const parsedBuckets = {};
    population[0].forEach(function (bucket) {
      //Parse Buckets and Filters
      const bucketName = bucket[0] === -1 ? "none" : `treatment-${bucket[0]}`;
      parsedBuckets[bucketName] = { rollout: [] };
      bucket[1].forEach(function (rollout) {
        parsedBuckets[bucketName].rollout.push({
          start: rollout.s,
          end: rollout.e,
        });
      });
    });

    const parsedFilters = [];
    population[1].forEach(function (filter) {
      let parse = {};
      //Filters we know
      switch (filter[0]) {
        case 2294888943: //guild_in_range_by_hash
          parse = {
            type: "guild_in_range_by_hash",
          };
          filter[1].forEach(function (filterData) {
            if (filterData[0] === 2690752156) {
              //hash_key
              parse.hash_key = filterData[1];
            } else if (filterData[0] === 1982804121) {
              //target
              parse.target = filterData[1];
            } else {
              console.log(
                `[EXPERIMENT] Expected guild_hub_types, got ${filterData}`
              );
            }
          });
          parsedFilters.push(parse);
          break;
        case 4148745523: //guild_hub_types
          parse = {
            type: "guild_hub_types",
          };
          filter[1].forEach(function (filterData) {
            if (filterData[0] === 4148745523) {
              //guild_features
              parse.hub_types = filterData[1];
            } else {
              console.log(
                `[EXPERIMENT] Expected guild_hub_types, got ${filterData}`
              );
            }
          });
          parsedFilters.push(parse);
          break;
        case 188952590: //guild_has_vanity_url
          parse = {
            type: "guild_has_vanity_url",
          };
          filter[1].forEach(function (filterData) {
            if (filterData[0] === 188952590) {
              parse.has_vanity = filterData[1];
            }
          });
          parsedFilters.push(parse);
          break;
        case 1604612045: //guild_has_feature
          parse = {
            type: "guild_has_feature",
          };
          filter[1].forEach(function (filterData) {
            if (filterData[0] === 1183251248) {
              //guild_features
              parse.guild_features = filterData[1];
            } else {
              console.log(
                `[EXPERIMENT] Expected guild_features, got ${filterData}`
              );
            }
          });
          parsedFilters.push(parse);
          break;
        case 3013771838: //guild_ids
          parse = {
            type: "guild_ids",
          };
          filter[1].forEach(function (filterData) {
            if (filterData[0] === 3013771838) {
              //guild_ids
              parse.ids = filterData[1];
            } else {
              console.log(`[EXPERIMENT] Expected guild_ids, got ${filterData}`);
            }
          });
          parsedFilters.push(parse);
          break;
        case 2404720969: //guild_id_range
          parse = {
            type: "guild_id_range",
          };
          filter[1].forEach(function (filterData) {
            if (filterData[0] === 3399957344) {
              //min_id
              parse.min_id = filterData[1];
            } else if (filterData[0] === 1238858341) {
              //max_id
              parse.max_id = filterData[1];
            } else {
              console.log(
                `[EXPERIMENT] Expected min_id or max_id, got ${filterData}`
              );
            }
          });
          parsedFilters.push(parse);
          break;
        case 2918402255: //guild_member_count_range
          parse = {
            type: "guild_member_count_range",
          };
          filter[1].forEach(function (filterData) {
            if (filterData[0] === 3399957344) {
              //min_id
              parse.min_id = filterData[1];
            } else if (filterData[0] === 1238858341) {
              //max_id
              parse.max_id = filterData[1];
            } else {
              console.log(
                `[EXPERIMENT] Expected min_id or max_id, got ${filterData}`
              );
            }
          });
          parsedFilters.push(parse);
          break;
        default:
          parsedFilters.push({
            type: "unknown_filter",
            hash: filter[0],
            data: filter[1],
          });
          break;
      }
    });
    parsedPopulations.push({
      buckets: parsedBuckets,
      filters: parsedFilters,
    });
    parsedExperiment.populations = parsedPopulations;
  });

  const parsedOverrides = {};
  experiment[4].forEach(function (override) {
    const overrideName = override.b === -1 ? "none" : `treatment-${override.b}`;
    //Parse overrides
    parsedOverrides[overrideName] = override.k;
  });
  parsedExperiment.overrides = parsedOverrides;
  return parsedExperiment;
};

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

  const oldExperimentsHashKeys = oldExperiments.map((e) => e.hashKey);
  const currentExperimentsHashKeys = currentExperiments.map((e) => e.hashKey);

  const addedExperiments = currentExperimentsHashKeys.filter(
    (key) => !oldExperimentsHashKeys.includes(key)
  );

  const removedExperiments = oldExperimentsHashKeys.filter(
    (key) => !currentExperimentsHashKeys.includes(key)
  );

  const changedExperiments = currentExperimentsHashKeys.filter((key) => {
    if (!oldExperimentsHashKeys.includes(key)) return false;
    return !deepEqual(
      oldExperiments.find((e) => e.hashKey === key),
      currentExperiments.find((e) => e.hashKey === key)
    );
  });

  if (addedExperiments.length > 0) {
    info(
      `Added Experiments: ${addedExperiments
        .map((key) =>
          experimentNameFormat(
            currentExperiments.find((e) => e.hashKey === key)
          )
        )
        .join(", ")}`
    );

    for (const experimentKey of addedExperiments) {
      send(
        webhookId,
        webhookToken,
        [
          defaultEmbed(
            currentExperiments.find((e) => e.hashKey === experimentKey)
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
          experimentNameFormat(
            currentExperiments.find((e) => e.hashKey === key)
          )
        )
        .join(", ")}`
    );

    for (const experimentKey of removedExperiments) {
      send(
        webhookId,
        webhookToken,
        [
          defaultEmbed(
            currentExperiments.find((e) => e.hashKey === experimentKey)
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
          experimentNameFormat(
            currentExperiments.find((e) => e.hashKey === key)
          )
        )
        .join(", ")}`
    );

    for (const experimentKey of changedExperiments) {
      send(
        webhookId,
        webhookToken,
        [
          defaultEmbed(
            currentExperiments.find((e) => e.hashKey === experimentKey)
          )
            .setColor(0x8dabc7)
            .toJSON(),
        ],
        "1104694113078608033"
      );
    }
  }
};

const defaultEmbed = (experiment) => {
  return new EmbedBuilder().addFields(
    {
      name: "Name",
      value: experimentNameFormat(experiment),
      inline: true,
    },
    {
      name: "Type",
      value: "guild",
      inline: true,
    },
    {
      name: "Populations",
      value: populationsFormat(experiment.populations),
      inline: false,
    },
    {
      name: "Overrides",
      value: overridesFormat(experiment.overrides),
      inline: false,
    }
  );
};
