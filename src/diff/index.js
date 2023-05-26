import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import { all, lang, stylesheet } from "./comments.js";
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

console.log(eventPayload);

const allComment = await all(octokit, eventPayload);
const langComment = await lang(octokit, eventPayload);
const stylesheetComment = await stylesheet(octokit, eventPayload);

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
    null,
    "1104677510878347334"
  );
}

if (langComment) {
  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      langComment.length > 65536 ? langComment.slice(0, 65536) : langComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    langComment,
    "1105589256996524042",
    "1104677673642496021"
  );
}

if (stylesheetComment) {
  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      stylesheetComment.length > 65536
        ? stylesheetComment.slice(0, 65536)
        : stylesheetComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    stylesheetComment,
    "1105847524662706226",
    "1105847708079624193"
  );
}
