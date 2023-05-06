import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";

const octokit = new Octokit();
const eventPayload = JSON.parse(
  await readFile(process.env.GITHUB_EVENT_PATH, "utf8")
);

console.log(eventPayload);
const latestCommit = eventPayload.commits[0];

const diff = await octokit.repos.compareCommits({
  owner: eventPayload.repository.owner.login,
  repo: eventPayload.repository.name,
  base: latestCommit.parents[0].id,
  head: latestCommit.id,
});

console.log(diff);
console.log(diff.data.files);
