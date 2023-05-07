import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import { all, lang } from "./comments.js";
import { send } from "./webhooks.js";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const [webhookId, webhookToken] = new URL(process.env.DISCORD_WEBHOOK).pathname
  .split("/")
  .slice(3);

const eventPayload = JSON.parse(
  await readFile(process.env.GITHUB_EVENT_PATH, "utf8")
);

const allComment = await all(octokit, eventPayload);
const langComment = await lang(octokit, eventPayload);

// create comment on commit
if (allComment) {
  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: allComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    allComment,
    "1104677510878347334"
  );
}

if (langComment) {
  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: langComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    langComment,
    "1104677673642496021"
  );
}
