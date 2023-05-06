import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import { all, lang } from "./comments.js";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
const eventPayload = JSON.parse(
  await readFile(process.env.GITHUB_EVENT_PATH, "utf8")
);

const allComment = await all(octokit, eventPayload);
const langComment = await lang(octokit, eventPayload);

console.log(allComment);
console.log(langComment);

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
