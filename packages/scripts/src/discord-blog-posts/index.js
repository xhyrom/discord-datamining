import xml2json from "xml-js";

import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import simpleGit from "simple-git";
import { JSDOM } from "jsdom";
import jsBeautify from "js-beautify";

import { error, success } from "../logger.js";
import months from "../months.js";
import { makeAllPropsStrings } from "./utils.js";
import { push } from "../utils.js";

const git = simpleGit({
  baseDir: join("..", ".."),
});
await mkdir(join("..", "..", "data", "blog-posts"), { recursive: true }).catch(
  () => {}
);

const res = await (await fetch("https://discord.com/blog/rss.xml")).text();
const json = JSON.parse(xml2json.xml2json(res, { compact: true }));

const { channel } = json.rss;

for (let item of channel.item) {
  item = makeAllPropsStrings(item);
  const id = item.link.split("/").pop();
  const path = join("..", "..", "data", "blog-posts", id);

  await mkdir(path, { recursive: true }).catch(() => {});

  const content = await (await fetch(item.link)).text();
  const dom = new JSDOM(content);
  let querySelector = dom.window.document.querySelector(
    ".blog-post-container > div:first-child > div:nth-child(2)"
  )?.outerHTML;
  if (!querySelector)
    querySelector =
      dom.window.document.querySelector(".blog-post-content")?.outerHTML;

  const beautified = jsBeautify.html_beautify(querySelector ?? "");

  await writeFile(join(path, "content.md"), beautified);
  await writeFile(join(path, "data.json"), JSON.stringify(item, null, 2));

  success(`Fetched ${item.title}`);
}

await writeFile(
  join("..", "..", "data", "blog-posts", "channel.json"),
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

const date = new Date();

await git.commit([
  `${date.getDate()} ${
    months[date.getMonth()]
  } 📰 ${date.getFullYear()} - Discord Blog Posts was updated 🚀`,
  `Posts (${channel.item.length}):\n${channel.item
    .map((item) => item.title)
    .join("\n")}`,
]);

await push(git, "origin", "master");
success("Successfully pushed 🚀");
