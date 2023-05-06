import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";
import { all } from "./comments";

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

const full = all(diff);
const lang = lang(octokit, eventPayload);

// create comment on commit
if (full) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: full,
  });
}

if (lang) {
  await octokit.repos.createCommitComment({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    commit_sha: eventPayload.after,
    body: lang,
  });
}
