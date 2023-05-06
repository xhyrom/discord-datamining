import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import { all } from "./comments.js";

const octokit = new Octokit();
const eventPayload = JSON.parse(
  await readFile(process.env.GITHUB_EVENT_PATH, "utf8")
);

const diff = await octokit.repos.compareCommits({
  owner: eventPayload.repository.owner.login,
  repo: eventPayload.repository.name,
  base: eventPayload.before,
  head: eventPayload.after,
});

const allComment = all(diff);
const langComment = lang(octokit, eventPayload);

// create comment on commit
if (allComment) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: allComment,
  });
}

if (langComment) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: langComment,
  });
}
