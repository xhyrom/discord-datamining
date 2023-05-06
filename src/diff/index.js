import { Octokit } from "@octokit/action";
import { readFile } from "node:fs/promises";

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

console.log(diff);
console.log(diff.data.files);
