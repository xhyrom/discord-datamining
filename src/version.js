import { info } from "./logger.mjs";
import { scripts } from "./files.js";
import { beautifiedScripts } from "./contents.js";
import { namilize } from "./utils.js";

info("Fetching version hash...");

export const { hash } = await (
  await fetch("https://canary.discord.com/assets/version.canary.json")
).json();

info("Getting build number...");

export const buildNumber = beautifiedScripts[namilize(scripts.slice(-1)[0])]
  .match(/buildNumber: ?"[0-9]+"/g)[0]
  .replace(/buildNumber: ?"/g, "")
  .replace(/"/g, "");

export default {
  hash,
  buildNumber,
};
