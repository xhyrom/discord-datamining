const andList = new Intl.ListFormat();
const orList = new Intl.ListFormat("en", { type: "disjunction" });

export const experimentNameFormat = (experiment) => {
  return experiment.name
    ? `${experiment.name} (${experiment.hashKey})`
    : experiment.hashKey;
};

export const bucketNameFormat = (bucketName) => {
  return bucketName === "none"
    ? "None"
    : `Treatment ${bucketName.replace("treatment-", "")}`;
};

export const populationsFormat = (populations) => {
  let format = "";

  for (const population of populations) {
    const filters =
      population.filters.length !== 0
        ? `Filter: ${andList.format(
            population.filters.map((f) => parseFilter(f))
          )}`
        : "";

    if (filters) format += `${filters}\n`;

    for (const [bucketName, bucketValue] of Object.entries(
      population.buckets
    )) {
      format += `${bucketNameFormat(bucketName)}: ${bucketValue.rollout
        .map((r) => `${r.start}-${r.end}`)
        .join(", ")}\n`;
    }

    format += "\n";
  }

  return format;
};

// https://github.com/advaith1/rollouts/blob/main/components/experiment.tsx#L97-L106
const hubTypes = ["Default", "High School", "College"];
export const parseFilter = (f) => {
  if (f.type === "guild_has_feature")
    return `Server has feature ${orList.format(f.hash_key)}`;
  if (f.type === "guild_id_range")
    return `Server ID is in range ${f.hash_key ?? 0} - ${f[1][1][1]}`;
  if (f.type === "guild_member_count_range")
    return `Server member count is ${
      f[1][1][1]
        ? `in range ${f.hash_key ?? 0} - ${f[1][1][1]}`
        : `${f.hash_key}+`
    }`;
  if (f.type === "guild_ids")
    return `Server ID is ${orList.format(f.hash_key)}`;
  if (f.type === "guild_hub_types")
    return `Server hub type is ${orList.format(
      f.hub_types.map((t) => hubTypes[t])
    )}`;
  if (f.type === "guild_has_vanity_url")
    return `Server ${f.hash_key ? "has" : "does not have"} a vanity URL`;
  if (f.type === "guild_in_range_by_hash")
    return `${f.target / 100}% of servers (hash key ${f.hash_key}, target ${
      f.target
    })`;
  return f.type;
};
