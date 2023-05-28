import "dotenv/config";
import { hash, buildNumber } from "./version.js";
import { scripts, stylesheets } from "./files.js";
import { beautifiedScripts, beautifiedStylesheets } from "./contents.js";
import { info, success } from "../logger.js";
import { namilize } from "./utils.js";
import months from "../months.js";

import { mkdir, readFile, rmdir, writeFile } from "node:fs/promises";
import simpleGit from "simple-git";
import { join } from "node:path";
import { error } from "node:console";
import { push } from "../utils.js";

const git = simpleGit({
  baseDir: join("..", ".."),
});

const hashInFile = await readFile(
  join("..", "..", "data", "hash.txt"),
  "utf-8"
);
if (hashInFile === hash) {
  info("No changes");
  process.exit(0);
}

info(`New build ${buildNumber} (${hash}) 🚀`);

// remove all files in data/scripts and data/stylesheets
await rmdir(join("..", "..", "data", "scripts"), { recursive: true }).catch(
  () => {}
);
await rmdir(join("..", "..", "data", "stylesheets"), { recursive: true }).catch(
  () => {}
);

await mkdir(join("..", "..", "data", "scripts"), { recursive: true }).catch(
  () => {}
);
await mkdir(join("..", "..", "data", "stylesheets"), { recursive: true }).catch(
  () => {}
);

await writeFile(join("..", "..", "data", "hash.txt"), hash);

for (const script of scripts) {
  const name = namilize(script);

  await writeFile(
    join("..", "..", "data", "scripts", `${name}.js`),
    beautifiedScripts[name]
  );
}

// write main script file
await writeFile(
  join("..", "..", "data", "current.js"),
  beautifiedScripts[namilize(scripts.slice(-1)[0])]
);

for (const stylesheet of stylesheets) {
  const name = namilize(stylesheet);

  await writeFile(
    join("..", "..", "data", "stylesheets", `${name}.css`),
    beautifiedStylesheets[name]
  );
}

// write main stylesheet file
await writeFile(
  join("..", "..", "data", "current.css"),
  beautifiedStylesheets[namilize(stylesheets.slice(-1)[0])]
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
  } ${date.getFullYear()} - Build ${buildNumber} (${hash}) 🚀`,
  `Scripts (${scripts.length}):\n${scripts
    .map((script) => namilize(script))
    .join("\n")}`,
  `Stylesheets (${stylesheets.length}):\n${stylesheets
    .map((stylesheet) => namilize(stylesheet))
    .join("\n")}`,
  `Build Number: ${buildNumber}\nHash: ${hash}`,
]);

await push(git, "origin", "master");
success(`Successfully pushed a new build ${buildNumber} (${hash}) 🚀`);
