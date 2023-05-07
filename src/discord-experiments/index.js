import { error, info, success } from "../logger.js";
import { decodeGuildExperiment } from "./utils.js";

import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import simpleGit from "simple-git";
import months from "../months.js";

const git = simpleGit();

info("Fetching experiments");
const res = await (
  await fetch(
    "https://canary.discord.com/api/v10/experiments?with_guild_experiments=true"
  )
).json();

const experiments = res.guild_experiments.map(decodeGuildExperiment);

await writeFile(
  join("data", "experiments.json"),
  JSON.stringify(experiments, null, 2)
);

const result = await git.status();
if (result.files.length === 0) {
  error("No changes");
  process.exit(1);
}

await git.pull();
await git.add(["data/."]);

const date = new Date();

await git.commit([
  `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} - Discord Experiments was updated 🚀`,
  `Experiments (${experiments.length}):\n${experiments
    .map(
      (experiment) => `${experiment.name || "unknown"} (${experiment.hashKey})`
    )
    .join("\n")}`,
]);

await git.push("origin", "master");
success("Successfully pushed 🚀");
