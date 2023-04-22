import version from "./version.js";
import { scripts, stylesheets } from "./files.js";
import { beautifiedScripts, beautifiedStylesheets } from "./contents.js";
import { info } from "./logger.mjs";
import { namilize } from "./utils.js";

import { mkdir, readFile, rmdir, writeFile } from "node:fs/promises";
import simpleGit from "simple-git";
import { join } from "node:path";
import { error } from "node:console";

const git = simpleGit();

const versionInFile = await readFile(join("data", "version.txt"), "utf-8");
if (versionInFile === version) {
  info("No changes");
  process.exit(0);
}

// remove all files in data/scripts and data/stylesheets
await rmdir(join("data", "scripts"), { recursive: true }).catch(() => {});
await rmdir(join("data", "stylesheets"), { recursive: true }).catch(() => {});

await mkdir(join("data", "scripts"), { recursive: true }).catch(() => {});
await mkdir(join("data", "stylesheets"), { recursive: true }).catch(() => {});

await writeFile(join("data", "version.txt"), version);

for (const script of scripts) {
  const name = namilize(script);

  await writeFile(
    join("data", "scripts", `${name}.js`),
    beautifiedScripts[name]
  );
}

// write main script file
await writeFile(
  join("data", "current.js"),
  beautifiedScripts[namilize(scripts.slice(-1)[0])]
);

for (const stylesheet of stylesheets) {
  const name = namilize(stylesheet);

  await writeFile(
    join("data", "stylesheets", `${name}.css`),
    beautifiedStylesheets[name]
  );
}

// write main stylesheet file
await writeFile(
  join("data", "current.css"),
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
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

await git.commit([
  `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} - ${version} 🚀`,
  `Scripts (${scripts.length}):\n${scripts
    .map((script) => namilize(script))
    .join("\n")}`,
  `Stylesheets (${stylesheets.length}):\n${stylesheets
    .map((stylesheet) => namilize(stylesheet))
    .join("\n")}`,
]);

await git.push("origin", "master");
