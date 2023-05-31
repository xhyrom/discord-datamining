import { writeFile, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import simpleGit from "simple-git";
import jsBeautify from "js-beautify";

import { error, success } from "../logger.js";
import { omit, push, namilize } from "../utils.js";
import months from "../months.js";
import { watcher } from "../support-articles-utils.js";

const [webhookId, webhookToken] = new URL(
  process.env.DISCORD_WEBHOOK_CREATOR_SUPPORT_ARTICLES ?? ""
).pathname
  .split("/")
  .slice(3);

const git = simpleGit({
  baseDir: join("..", ".."),
});
await mkdir(join("..", "..", "data", "creator-support-articles"), {
  recursive: true,
}).catch(() => {});

const articles = [];
const sections = [];

const firstPageArticles = await (
  await fetch(
    "https://creator-support.discord.com/api/v2/help_center/en-us/articles.json"
  )
).json();
const firstPageSections = await (
  await fetch(
    "https://creator-support.discord.com/api/v2/help_center/en-us/sections.json"
  )
).json();

for (let i = 1; i <= firstPageArticles.page_count; i++) {
  const page = await (
    await fetch(
      `https://creator-support.discord.com/api/v2/help_center/en-us/articles.json?page=${i}&per_page=30`
    )
  ).json();

  articles.push(...page.articles);
}
for (let i = 1; i <= firstPageSections.page_count; i++) {
  const page = await (
    await fetch(
      `https://creator-support.discord.com/api/v2/help_center/en-us/sections.json?page=${i}&per_page=30`
    )
  ).json();

  sections.push(
    ...page.sections.map((section) => omit(section, ["updated_at"]))
  );
}

for (const article of articles) {
  const path = join(
    "..",
    "..",
    "data",
    "creator-support-articles",
    namilize(article.title ?? article.name)
  );

  await mkdir(path, { recursive: true }).catch(() => {});

  const content = jsBeautify.html_beautify(article.body);

  await writeFile(join(path, "content.md"), content);
  await writeFile(
    join(path, "data.json"),
    JSON.stringify(
      omit(article, ["body", "vote_sum", "vote_count", "updated_at"]),
      null,
      2
    )
  );

  success(`Fetched ${article.title ?? article.name}`);
}

const oldSections = JSON.parse(
  await readFile(
    join("..", "..", "data", "creator-support-articles", "sections.json"),
    "utf-8"
  )
);

await writeFile(
  join("..", "..", "data", "creator-support-articles", "sections.json"),
  JSON.stringify(sections, null, 2)
);

success("Successfully fetched creator support articles 🚀");

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
  } ${date.getFullYear()} - Discord Creator Support Articles was updated 🚀`,
  `Articles (${articles.length}):\n${articles
    .map((article) => article.title ?? article.name)
    .join("\n")}`,
]);

const pushResult = await push(git, "origin", "master");
if (pushResult.update) {
  await watcher(
    oldSections,
    sections,
    pushResult,
    webhookId,
    webhookToken,
    "1112613650159652946"
  );
}

success("Successfully pushed 🚀");
