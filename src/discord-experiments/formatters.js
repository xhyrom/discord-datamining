const andList = new Intl.ListFormat();
const orList = new Intl.ListFormat("en", { type: "disjunction" });

export const experimentNameFormat = (experiment) => {
  return experiment.label
    ? `${experiment.label} - ${experiment.id} (${experiment.hash})`
    : `experiment.id} (${experiment.hash})`;
};

export const nameFormat = (name) => {
  return name === "none" ? "None" : `Treatment ${name}`;
};

export const populationsFormat = (populations, treatments) => {
  let format = "";

  if (populations.length > 0) {
    for (const population of populations) {
      const filters =
        population.filters.length !== 0
          ? `**Filter**: ${andList.format(
              population.filters.map((f) => parseFilter(f))
            )}`
          : "";

      if (filters) format += `${filters}\n`;

      for (const [bucketName, bucketValue] of Object.entries(
        population.buckets
      )) {
        const percentage =
          bucketValue.rollout.reduce(
            (total, range) => total + range.end - range.start,
            0
          ) / 100;
        format += `**${nameFormat(bucketName)}**: ${
          treatments.find((t) => t.id === parseInt(bucketName)).label ?? ""
        } ${percentage}% (${bucketValue.rollout
          .map((r) => `${r.start}-${r.end}`)
          .join(", ")})\n`;
      }

      format += "\n";
    }
  } else if (populations.length === 0 && treatments.length > 0) {
    format = treatments
      .map((t) => `**Treatment ${t.id}**: ${t.label}`)
      .join("\n");
  }

  return format;
};

export const overridesFormat = (overrides) => {
  return Object.entries(overrides).length > 0
    ? Object.entries(overrides)
        .map(([name, value]) => `**${nameFormat(name)}**: ${value.join(", ")}`)
        .join("\n\n")
    : "Any overrides";
};

// https://github.com/advaith1/rollouts/blob/main/components/experiment.tsx#L97-L106
const hubTypes = ["Default", "High School", "College"];
export const parseFilter = (f) => {
  if (f.type === "guild_has_feature")
    return `Server has feature ${orList.format(f.features)}`;
  if (f.type === "guild_id_range")
    return `Server ID is in range ${f.min_id ?? 0} - ${f.max_id ?? 0}`;
  if (f.type === "guild_member_count_range")
    return `Server member count is ${
      f.max_count
        ? `in range ${f.min_count ?? 0} - ${f.max_count ?? 0}`
        : `${f.min_count}+`
    }`;
  if (f.type === "guild_ids") return `Server ID is ${orList.format(f.ids)}`;
  if (f.type === "guild_hub_types")
    return `Server hub type is ${orList.format(
      f.hub_types.map((t) => hubTypes[t])
    )}`;
  if (f.type === "guild_has_vanity_url")
    return `Server ${f.has_vanity ? "has" : "does not have"} a vanity URL`;
  if (f.type === "guild_in_range_by_hash")
    return `${f.target / 100}% of servers (hash key ${f.hash_key}, target ${
      f.target
    })`;
  return f.type;
};
