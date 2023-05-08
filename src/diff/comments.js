import differ from "@adryd325/discord-datamining-lang-differ";

/**
 * @param {import('@octokit/action').Octokit} octokit
 * @param {unknown} eventPayload
 */
export const all = async (octokit, eventPayload) => {
  const diff = await octokit.repos.compareCommits({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    base: eventPayload.before,
    head: eventPayload.after,
  });

  let comment = "";

  for (const file of diff.data.files) {
    if (!file.patch) continue;

    comment += `### ${file.filename}\n\n`;
    comment += "```diff\n";
    comment += file.patch;
    comment += "\n```\n\n";
  }

  return comment;
};

/**
 * @param {import('@octokit/action').Octokit} octokit
 * @param {unknown} eventPayload
 */
export const lang = async (octokit, eventPayload) => {
  const currentTreeRoot = await octokit.rest.git.getTree({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    tree_sha: eventPayload.before,
  });
  const dataFileSha = currentTreeRoot.data.tree.find(
    (file) => file.path === "data"
  )?.sha;
  if (!dataFileSha) return "";

  const currentTree = await octokit.rest.git.getTree({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    tree_sha: dataFileSha,
  });

  const currentFileSha = currentTree.data.tree.find((file) =>
    file.path.includes("current.js")
  )?.sha;

  if (!currentFileSha) return "";

  const currentFile = await octokit.rest.git.getBlob({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    file_sha: currentFileSha,
  });

  const commit = await octokit.rest.repos.getCommit({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    ref: eventPayload.after,
  });
  if (!commit) return "";
  if (!commit.data.files[0].sha) return "";

  const newFile = await octokit.rest.git.getBlob({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    file_sha: commit.data.files[0].sha,
  });

  const currentContent = Buffer.from(
    currentFile.data.content,
    "base64"
  ).toString("utf8");
  const newContent = Buffer.from(newFile.data.content, "base64").toString(
    "utf8"
  );

  let comment = "";
  try {
    comment = differ(currentContent, newContent, "codeblock");
  } catch {}

  return comment;
};
