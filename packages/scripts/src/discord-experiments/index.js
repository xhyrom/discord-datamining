import { error, info, success } from "../logger.js";
import { watcher } from "./utils.js";
import { experimentNameFormat } from "./formatters.js";

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import simpleGit from "simple-git";
import months from "../months.js";
import { push } from "../utils.js";

const git = simpleGit({
  baseDir: join("..", ".."),
});

const [webhookId, webhookToken] = new URL(
  process.env.DISCORD_WEBHOOK_EXPERIMENTS
).pathname
  .split("/")
  .slice(3);

info("Fetching experiments");
const experiments = await (
  await fetch(
    "https://api.discord-experiments.xhyrom.dev/v2/experiments?also_with_unknown_ids=true"
  )
).json();

await watcher(
  JSON.parse(
    await readFile(join("..", "..", "data", "experiments.json"), "utf-8")
  ),
  experiments,
  webhookId,
  webhookToken
);

await writeFile(
  join("..", "..", "data", "experiments.json"),
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

await push(git, "origin", "master");
success("Successfully pushed 🚀");
