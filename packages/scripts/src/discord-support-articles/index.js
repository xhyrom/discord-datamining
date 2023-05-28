import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import simpleGit from "simple-git";
import jsBeautify from "js-beautify";

import { error, success } from "../logger.js";
import { omit } from "../utils.js";
import months from "../months.js";
import { namilize } from "./utils.js";

const git = simpleGit({
  baseDir: join("..", ".."),
});
await mkdir(join("..", "..", "data", "support-articles"), {
  recursive: true,
}).catch(() => {});

const articles = [];

const firstPage = await (
  await fetch(
    "https://support.discord.com/api/v2/help_center/en-us/articles.json"
  )
).json();

for (let i = 1; i <= firstPage.page_count; i++) {
  const page = await (
    await fetch(
      `https://support.discord.com/api/v2/help_center/en-us/articles.json?page=${i}&per_page=30`
    )
  ).json();

  articles.push(...page.articles);
}

for (const article of articles) {
  const path = join(
    "..",
    "..",
    "data",
    "support-articles",
    namilize(article.title ?? article.name)
  );

  await mkdir(path, { recursive: true }).catch(() => {});

  const content = jsBeautify.html_beautify(article.body);

  await writeFile(join(path, "content.md"), content);
  await writeFile(
    join(path, "data.json"),
    JSON.stringify(
      // updated_at is randomly updated, so we omit it
      omit(article, ["body", "vote_sum", "vote_count", "updated_at"]),
      null,
      2
    )
  );

  success(`Fetched ${article.title ?? article.name}`);
}

success("Successfully fetched support articles 🚀");

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
  } ${date.getFullYear()} - Discord Support Articles was updated 🚀`,
  `Articles (${articles.length}):\n${articles
    .map((article) => article.title ?? article.name)
    .join("\n")}`,
]);

await git.push("origin", "master");
success("Successfully pushed 🚀");
