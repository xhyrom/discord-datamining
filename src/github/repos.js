import { Octokit } from "@octokit/rest";
import { info } from "../logger.js";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

info("Fetching repositories from GitHub...");

export const repos = await Promise.all(
  await (
    await octokit.paginate(octokit.rest.repos.listForOrg, {
      org: "discord",
    })
  ).map(async (repo) => {
    const lastCommits = await octokit.rest.repos
      .listCommits({
        owner: "discord",
        repo: repo.name,
        per_page: 5,
      })
      .catch(() => ({ data: [] }));

    const lastReleases = await octokit.rest.repos
      .listReleases({
        owner: "discord",
        repo: repo.name,
        per_page: 5,
      })
      .catch(() => ({ data: [] }));
    const lastIssues = await octokit.rest.issues
      .listForRepo({
        owner: "discord",
        repo: repo.name,
        per_page: 5,
        state: "all",
      })
      .catch(() => ({ data: [] }));

    const lastPullRequests = await octokit.rest.pulls
      .list({
        owner: "discord",
        repo: repo.name,
        per_page: 5,
        state: "all",
      })
      .catch(() => ({ data: [] }));

    const listOfBranches = await octokit.rest.repos
      .listBranches({
        owner: "discord",
        repo: repo.name,
      })
      .catch(() => ({ data: [] }));

    return {
      ...repo,
      branches: listOfBranches.data,
      last5: {
        commits: lastCommits.data,
        releases: lastReleases.data,
        issues: lastIssues.data,
        pullRequests: lastPullRequests.data,
      },
    };
  })
);

export default repos;
