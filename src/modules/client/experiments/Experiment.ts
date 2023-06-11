import type {
  Experiment as ExperimentType,
  FeatureFilter,
  Filter,
  HubTypeFilter,
  IDFilter,
  IDRangeFilter,
  MemberCountRangeFilter,
  Population,
  RangeByHashFilter,
  VanityURLFilter,
} from "./types";

const andList = new Intl.ListFormat();
const orList = new Intl.ListFormat("en", { type: "disjunction" });
const hubTypes = ["Default", "High School", "College"];

const nameFormat = (name: string) => {
  return name === "none" ? "None" : `Treatment ${name}`;
};

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

  get name() {
    if (!this.data.label && !this.data.id) return `unknown ${this.data.hash}`;

    return this.data.label
      ? `${this.data.label} - ${this.data.id} (${this.data.hash})`
      : `${this.data.id} (${this.data.hash})`;
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
              population.filters.map((f) => this.parseFilter(f))
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
        format += `**${nameFormat(
          bucketName
        )}**: ${percentage}% (${bucketValue.rollout
          .map((r) => `${r.start}-${r.end}`)
          .join(", ")})\n`;
      }

      format += "\n";
    }

    return format.length > 1024 ? format.slice(0, 1021) + "..." : format;
  }

  private parseFilter(f: Filter) {
    if (f.type === "guild_has_feature")
      return `Server has feature ${orList.format(
        (f as FeatureFilter).features
      )}`;
    if (f.type === "guild_id_range")
      return `Server ID is in range ${(f as IDRangeFilter).min_id ?? 0} - ${
        (f as IDRangeFilter).max_id ?? 0
      }`;
    if (f.type === "guild_member_count_range")
      return `Server member count is ${
        (f as MemberCountRangeFilter).max_count
          ? `in range ${(f as MemberCountRangeFilter).min_count ?? 0} - ${
              (f as MemberCountRangeFilter).max_count ?? 0
            }`
          : `${(f as MemberCountRangeFilter).min_count}+`
      }`;
    if (f.type === "guild_ids")
      return `Server ID is ${orList.format((f as IDFilter).ids)}`;
    if (f.type === "guild_hub_types")
      return `Server hub type is ${orList.format(
        (f as HubTypeFilter).hub_types.map((t) => hubTypes[t]!)
      )}`;
    if (f.type === "guild_has_vanity_url")
      return `Server ${
        (f as VanityURLFilter).has_vanity ? "has" : "does not have"
      } a vanity URL`;
    if (f.type === "guild_in_range_by_hash")
      return `${(f as RangeByHashFilter).target / 100}% of servers (hash key ${
        (f as RangeByHashFilter).hash_key
      }, target ${(f as RangeByHashFilter).target})`;
    return f.type;
  }
}
