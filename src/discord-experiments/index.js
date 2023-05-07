import { error, info, success } from "../logger.js";
import { decodeGuildExperiment, watcher } from "./utils.js";
import { experimentNameFormat } from "./formatters.js";

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import simpleGit from "simple-git";
import months from "../months.js";

const git = simpleGit();

const [webhookId, webhookToken] = new URL(process.env.DISCORD_WEBHOOK).pathname
  .split("/")
  .slice(3);

info("Fetching experiments");
const res = await (
  await fetch(
    "https://canary.discord.com/api/v10/experiments?with_guild_experiments=true"
  )
).json();

const experiments = res.guild_experiments.map(decodeGuildExperiment);

await watcher(
  JSON.parse(await readFile(join("data", "experiments.json"), "utf-8")),
  experiments,
  webhookId,
  webhookToken
);

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
    .map(experimentNameFormat)
    .join("\n")}`,
]);

await git.push("origin", "master");
success("Successfully pushed 🚀");
