import { info } from "./logger.mjs";

info("Fetching version hash...");

export const { hash } = await (
  await fetch("https://canary.discord.com/assets/version.canary.json")
).json();

export default hash;
