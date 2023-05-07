import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import { all, lang } from "./comments.js";
import { send } from "./webhooks.js";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const [webhookId, webhookToken] = new URL(process.env.DISCORD_WEBHOOK)
  .split("/")
  .slice(3);

const webhookThreadId = new URL(process.env.DISCORD_WEBHOOK).searchParams.get(
  "thread_id"
);

const eventPayload = JSON.parse(
  await readFile(process.env.GITHUB_EVENT_PATH, "utf8")
);

const allComment = await all(octokit, eventPayload);
const langComment = await lang(octokit, eventPayload);

// create comment on commit
if (allComment) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: allComment,
  });

  send(webhookId, webhookToken, allComment, webhookThreadId);
}

if (langComment) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: langComment,
  });

  send(webhookId, webhookToken, langComment, webhookThreadId);
}
