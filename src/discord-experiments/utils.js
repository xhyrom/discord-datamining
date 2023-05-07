// Adopted from https://gitlab.com/derpystuff/discord-experiments/-/blob/main/index.js

export const decodeGuildExperiment = (experiment) => {
  //Decodes Experiments
  const parsedExperiment = {
    hashKey: experiment[0],
    name: experiment[1],
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
    //Parse overrides
    parsedOverrides[override.b.toString()] = override.k;
  });
  parsedExperiment.overrides = parsedOverrides;
  return parsedExperiment;
};
