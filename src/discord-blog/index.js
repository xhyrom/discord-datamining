import xml2json from "xml-js";

import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import simpleGit from "simple-git";
import { error, success } from "../logger.js";
import months from "../months.js";
import { diff } from "./diff.js";
import { makeAllPropsStrings } from "./utils.js";

const git = simpleGit();

const [webhookId, webhookToken] = new URL(process.env.DISCORD_WEBHOOK).pathname
  .split("/")
  .slice(3);

await mkdir(join("data", "blog-articles"), { recursive: true }).catch(() => {});

const res = await (await fetch("https://discord.com/blog/rss.xml")).text();
const json = JSON.parse(xml2json.xml2json(res, { compact: true }));

const { channel } = json.rss;

for (let item of channel.item) {
  item = makeAllPropsStrings(item);
  const id = item.link.split("/").pop();
  const path = join("data", "blog-articles", id);

  await mkdir(path, { recursive: true }).catch(() => {});

  const content = await (await fetch(item.link)).text();

  await writeFile(join(path, "content.html"), content);
  await writeFile(join(path, "data.json"), JSON.stringify(item, null, 2));

  success(`Fetched ${item.title}`);
}

await writeFile(
  join("data", "blog-articles", "channel.json"),
  JSON.stringify(makeAllPropsStrings(channel), null, 2)
);

success("Successfully fetched blog articles 🚀");

const result = await git.status();
if (result.files.length === 0) {
  error("No changes");
  process.exit(1);
}

await git.pull();
await git.add(["data/."]);

await diff(channel.item, webhookId, webhookToken);

const date = new Date();

await git.commit([
  `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} - Github Data was updated 🚀`,
  `Articles (${channel.item.length}):\n${channel.item
    .map((item) => item.title)
    .join("\n")}`,
]);

await git.push("origin", "master");
success("Successfully pushed 🚀");
