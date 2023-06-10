import "dotenv/config";
import { push } from "../utils.js";
import { error, success } from "../logger.js";
import months from "../months.js";

import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import simpleGit from "simple-git";

const git = simpleGit({
  baseDir: join("..", ".."),
});

const routes = await (
  await fetch("https://api.distools.xhyrom.dev/v2/routes")
).json();

await writeFile(
  join("..", "..", "data", "routes.json"),
  JSON.stringify(routes, null, 2)
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
  } 📨 ${date.getFullYear()} - Routes were updated 🚀`,
]);

await push(git, "origin", "master");
success("Successfully pushed 🚀");
