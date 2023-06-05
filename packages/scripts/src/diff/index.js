import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import {
  all,
  strings,
  routes,
  stylesheet,
  blogPosts,
  supportArticles,
} from "./comments.js";
import { send, sendEmbeds } from "./webhooks.js";

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
});

const eventPayload = JSON.parse(
  await readFile(process.env.GITHUB_EVENT_PATH ?? "", "utf8")
);

const allComment = await all(octokit, eventPayload);
const stringsComment = await strings(octokit, eventPayload);
const routesComment = await routes(octokit, eventPayload);
const stylesheetComment = await stylesheet(octokit, eventPayload);
const blogPostsComment = await blogPosts(octokit, eventPayload);
const supportArticlesComment = await supportArticles(
  octokit,
  eventPayload,
  "Support Articles"
);
const supportDevArticlesComment = await supportArticles(
  octokit,
  eventPayload,
  "Support Dev Articles",
  "support-dev-articles"
);
const creatorSupportArticlesComment = await supportArticles(
  octokit,
  eventPayload,
  "Creator Support Articles",
  "creator-support-articles"
);

// create comment on commit
if (allComment) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: allComment.length >= 65535 ? allComment.slice(0, 65535) : allComment,
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

if (routesComment) {
  const [webhookId, webhookToken] = new URL(
    process.env.DISCORD_WEBHOOK_ROUTES ?? ""
  ).pathname
    .split("/")
    .slice(3);

  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      routesComment.length >= 65535
        ? routesComment.slice(0, 65535)
        : routesComment,
  });

  await send(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    routesComment,
    "1115349386663305217"
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

if (blogPostsComment.comment) {
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
      blogPostsComment.comment.length >= 65535
        ? blogPostsComment.comment.slice(0, 65535)
        : blogPostsComment.comment,
  });

  await sendEmbeds(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    blogPostsComment.embeds,
    "1112067613200228382"
  );
}

if (supportArticlesComment.comment) {
  const [webhookId, webhookToken] = new URL(
    process.env.DISCORD_WEBHOOK_SUPPORT_ARTICLES ?? ""
  ).pathname
    .split("/")
    .slice(3);

  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      supportArticlesComment.comment.length >= 65535
        ? supportArticlesComment.comment.slice(0, 65535)
        : supportArticlesComment.comment,
  });

  await sendEmbeds(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    supportArticlesComment.embeds,
    "1112067561375420436"
  );
}

if (supportDevArticlesComment.comment) {
  const [webhookId, webhookToken] = new URL(
    process.env.DISCORD_WEBHOOK_SUPPORT_DEV_ARTICLES ?? ""
  ).pathname
    .split("/")
    .slice(3);

  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      supportDevArticlesComment.comment.length >= 65535
        ? supportDevArticlesComment.comment.slice(0, 65535)
        : supportDevArticlesComment.comment,
  });

  await sendEmbeds(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    supportDevArticlesComment.embeds,
    "1112067587002609818"
  );
}

if (creatorSupportArticlesComment.comment) {
  const [webhookId, webhookToken] = new URL(
    process.env.DISCORD_WEBHOOK_CREATOR_SUPPORT_ARTICLES ?? ""
  ).pathname
    .split("/")
    .slice(3);

  const comment = await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body:
      creatorSupportArticlesComment.comment.length >= 65535
        ? creatorSupportArticlesComment.comment.slice(0, 65535)
        : creatorSupportArticlesComment.comment,
  });

  await sendEmbeds(
    eventPayload,
    comment.data,
    webhookId,
    webhookToken,
    creatorSupportArticlesComment.embeds,
    "1112613650159652946"
  );
}
