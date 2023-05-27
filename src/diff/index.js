import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import { all, strings, stylesheet, blogPosts } from "./comments.js";
import { send } from "./webhooks.js";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const eventPayload = JSON.parse(
  await readFile(process.env.GITHUB_EVENT_PATH ?? "", "utf8")
);

const allComment = await all(octokit, eventPayload);
const stringsComment = await strings(octokit, eventPayload);
const stylesheetComment = await stylesheet(octokit, eventPayload);
const blogPostsComment = await blogPosts(octokit, eventPayload);

// create comment on commit
if (allComment) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: allComment,
  });
}

if (stringsComment) {
  const [webhookId, webhookToken] = new URL(
    process.env.DISCORD_WEBHOOK_STRINGS ?? ""
  ).pathname
    .split("/")
    .slice(3);

  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      stringsComment.length >= 65535
        ? stringsComment.slice(0, 65535)
        : stringsComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    stringsComment,
    "1105589256996524042"
  );
}

if (stylesheetComment) {
  const [webhookId, webhookToken] = new URL(
    process.env.DISCORD_WEBHOOK_STYLESHEET ?? ""
  ).pathname
    .split("/")
    .slice(3);

  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      stylesheetComment.length >= 65535
        ? stylesheetComment.slice(0, 65535)
        : stylesheetComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    stylesheetComment,
    "1105847524662706226"
  );
}

if (blogPostsComment) {
  const [webhookId, webhookToken] = new URL(
    process.env.DISCORD_WEBHOOK_BLOG_POSTS ?? ""
  ).pathname
    .split("/")
    .slice(3);

  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      blogPostsComment.length >= 65535
        ? blogPostsComment.slice(0, 65535)
        : blogPostsComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    blogPostsComment,
    "1111708976309084201"
  );
}
