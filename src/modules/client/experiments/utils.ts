import type {
  FeatureFilter,
  Filter,
  HubTypeFilter,
  IDFilter,
  IDRangeFilter,
  MemberCountRangeFilter,
  RangeByHashFilter,
  VanityURLFilter,
} from "./types";

export const andList = new Intl.ListFormat();
export const orList = new Intl.ListFormat("en", { type: "disjunction" });
export const hubTypes = ["Default", "High School", "College"];

export const nameFormat = (name: string) => {
  return name === "none" ? "None" : `Treatment ${name}`;
};

export const colorFromName = (name: string) => {
  return name === "none" ? "\n\x1b[31m" : "\n\x1b[36m";
};

export const parseFilter = (f: Filter) => {
  if (f.type === "guild_has_feature")
    return `Server has feature ${orList.format((f as FeatureFilter).features)}`;
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
};
