import "dotenv/config";
import repos from "./repos.js";
import { omit } from "./utils.js";
import { success } from "../logger.js";
import months from "../months.js";

import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import simpleGit from "simple-git";
import filenamify from "filenamify";

const git = simpleGit();

await mkdir(join("data", "github-repos"), { recursive: true }).catch(() => {});

for (const repo of repos) {
  const path = join(
    "data",
    "github-repos",
    filenamify(repo.name, { replacement: "__" })
  );

  await mkdir(path, { recursive: true }).catch(() => {});

  await writeFile(join(path, "info.json"), JSON.stringify(omit(repo), null, 2));
}

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
  } ${date.getFullYear()} - Github Date was updated 🚀`,
  `Repos (${repos.length}):\n${repos.map((repo) => repo.name).join("\n")}`,
]);

await git.push("origin", "master");
success("Successfully pushed 🚀");
