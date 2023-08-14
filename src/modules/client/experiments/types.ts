/**
  *  discord-dataming - powerful discord datamining, datamines discord
  *  Copyright (C) 2023 Jozef Steinhübl

  *  This program is free software: you can redistribute it and/or modify
  *  it under the terms of the GNU General Public License as published by
  *  the Free Software Foundation, either version 3 of the License, or
  *  (at your option) any later version.

  *  This program is distributed in the hope that it will be useful,
  *  but WITHOUT ANY WARRANTY; without even the implied warranty of
  *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  *  GNU General Public License for more details.
 
  *  You should have received a copy of the GNU General Public License
  *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  * **/

// FROM https://github.com/xhyrom-utils/distools-api - PRIVATE REPO

export interface Endpoint {
  guild_experiments: APIRollout[];
}

export type APIRollout = [
  number, // hash
  string | null, // id
  number, // revision
  APIPopulation[], // populations
  {
    // overrides
    /** bucket */ b: number;
    /** server IDs */ k: string[];
  }[],
  [APIPopulation[]] // overrides formatted
];

export type APIPopulation = [
  [
    number, //bucket
    {
      // rollout
      /** start */ s: number;
      /** end */ e: number;
    }[]
  ][],
  APIFilter[]
];

export enum APIFilterType {
  Feature = 1604612045,
  IDRange = 2404720969,
  MemberCount = 2918402255,
  ID = 3013771838,
  HubType = 4148745523,
  VanityURL = 188952590,
  RangeByHash = 2294888943,
}

type APIFeatureFilter = [APIFilterType.Feature, [[number, string[]]]];
type APIIDRangeFilter = [
  APIFilterType.IDRange,
  [[number, number | null], [number, number]]
];
type APIMemberCountFilter = [
  APIFilterType.MemberCount,
  [[number, number | null], [number, number]]
];
type APIIDFilter = [APIFilterType.ID, [[number, string[]]]];
type APIHubTypeFilter = [APIFilterType.HubType, [[number, number[]]]];
type APIVanityURLFilter = [
  APIFilterType.VanityURL,
  [[APIFilterType.VanityURL, boolean]]
];
type APIRangeByHashFilter = [
  APIFilterType.RangeByHash,
  [[number, number], [number, number]]
];

export type APIFilter =
  | APIFeatureFilter
  | APIIDRangeFilter
  | APIMemberCountFilter
  | APIIDFilter
  | APIHubTypeFilter
  | APIVanityURLFilter
  | APIRangeByHashFilter;

export interface ScrapeResult {
  experiments: Experiment[];
  routes: Record<string, string>;
}

export interface RawGuildExperiment {
  hashKey: string | null;
  holdoutBucket: undefined;
  holdoutName: undefined;
  revision: number;
  overrides: Record<string, number>;
  populations: RawGuildExperimentPopulation[];
  overridesFormatted: RawGuildExperimentPopulation[][];
}

export interface RawGuildExperimentPopulation {
  buckets: {
    bucket: number;
    positions: {
      start: number;
      end: number;
    }[];
  }[];
  // we dont need to type filters bcs just functions
  rawFilterData: APIFilter[];
}

export interface RawExperiment {
  type: string;
  title: string;
  clientFilter: undefined;
  description: string[];
  buckets: number[];
}

export type RawConfig = Omit<
  BaseExperiment["data"],
  "description" | "buckets" | "config_keys"
> & {
  defaultConfig: Record<string, string>;
};

export interface BaseExperiment {
  data: {
    kind: string;
    id: string | undefined;
    label: string | undefined;
    description: string[] | undefined;
    hash: number;
    buckets: number[] | undefined;
    config_keys: string[] | undefined;
  };
}

export type Experiment = BaseExperiment & {
  rollout?: Rollout | undefined;
};

export interface Rollout {
  hash: number;
  id?: string | undefined;
  populations: Population[];
  revision?: number | undefined;
  overrides: Record<string, string[]>;
  overrides_formatted: Population[];
}

export interface Population {
  buckets: Record<string, Bucket>;
  filters: Filter[];
}

export interface Bucket {
  rollout: {
    start: number;
    end: number;
  }[];
}

export interface FeatureFilter {
  type: "guild_has_feature";
  features: string[];
}

export interface IDRangeFilter {
  type: "guild_id_range";
  min_id?: number;
  max_id: number;
}

export interface MemberCountRangeFilter {
  type: "guild_member_count_range";
  min_count?: number;
  max_count: number;
}

export interface IDFilter {
  type: "guild_ids";
  ids: string[];
}

export interface HubTypeFilter {
  type: "guild_hub_types";
  hub_types: number[];
}

export interface VanityURLFilter {
  type: "guild_has_vanity_url";
  has_vanity: boolean;
}

export interface RangeByHashFilter {
  type: "guild_in_range_by_hash";
  hash_key: number;
  target: number;
}

export type Filter =
  | {
      type: string;
    }
  | FeatureFilter
  | IDRangeFilter
  | MemberCountRangeFilter
  | IDFilter
  | HubTypeFilter
  | VanityURLFilter
  | RangeByHashFilter;
