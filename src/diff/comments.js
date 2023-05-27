import differ from "@adryd325/discord-datamining-lang-differ";
import { readFile } from "node:fs/promises";
import { EmbedBuilder } from "@discordjs/builders";
import { join } from "node:path";

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

    comment += `## ${file.filename}\n\n`;
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
export const strings = async (octokit, eventPayload) => {
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

  const currentJsFile = commit.data.files.find((file) =>
    file.filename.includes("current.js")
  );

  if (!commit) return "";
  if (!currentJsFile?.sha) return "";

  const newFile = await octokit.rest.git.getBlob({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    file_sha: currentJsFile.sha,
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

/**
 * @param {import('@octokit/action').Octokit} octokit
 * @param {unknown} eventPayload
 */
export const stylesheet = async (octokit, eventPayload) => {
  const diff = await octokit.repos.compareCommits({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    base: eventPayload.before,
    head: eventPayload.after,
  });

  let comment = "";

  const currentCssFile = diff.data.files.find((file) =>
    file.filename.includes("current.css")
  );
  if (!currentCssFile || !currentCssFile?.patch) return "";

  comment += `## ${currentCssFile.filename}\n\n`;
  comment += "```diff\n";
  comment += currentCssFile.patch;
  comment += "\n```\n\n";

  return comment;
};

/**
 * @param {import('@octokit/action').Octokit} octokit
 * @param {unknown} eventPayload
 */
export const blogPosts = async (octokit, eventPayload) => {
  const diff = await octokit.repos.compareCommits({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    base: eventPayload.before,
    head: eventPayload.after,
  });

  let comment = "";

  const posts = diff.data.files.filter((file) =>
    file.filename.includes("blog-posts")
  );
  const embeds = {};

  for (const blogPost of posts) {
    if (!blogPost.patch) continue;

    const fileName = blogPost.filename.split("/")[2];
    comment += `## ${fileName}\n\n`;
    comment += "```diff\n";
    comment += blogPost.patch;
    comment += "\n```\n\n";

    try {
      const before = await getBlogPostFromBeforeCommit(octokit, eventPayload);
      const data = JSON.parse(
        await readFile(
          join("data", "blog-posts", fileName, "data.json"),
          "utf-8"
        )
      );

      embeds[fileName] = new EmbedBuilder()
        .setTitle(before?.title ? "Blog Post Updated" : "New Blog Post")
        .addFields(
          {
            name: "Title",
            value: data.title,
          },
          {
            name: "Description",
            value: data.description,
          },
          {
            name: "Link",
            value: data.link,
          }
        )
        .setColor(before?.title ? 0xe8c61a : 0x51f542)
        .toJSON();
    } catch {
      const data = await getBlogPostFromBeforeCommit(octokit, eventPayload);

      embeds[fileName] = new EmbedBuilder()
        .setTitle("Blog Post Removed")
        .addFields(
          {
            name: "Title",
            value: data.title,
          },
          {
            name: "Description",
            value: data.description,
          },
          {
            name: "Link",
            value: data.link,
          }
        )
        .setColor(0xf53731)
        .toJSON();
    }
  }

  return {
    comment,
    embeds: Object.values(embeds),
  };
};

/**
 * @param {import('@octokit/action').Octokit} octokit
 * @param {unknown} eventPayload
 */
const getBlogPostFromBeforeCommit = async (octokit, eventPayload) => {
  try {
    const tree = await octokit.rest.git.getTree({
      owner: eventPayload.repository.owner.login,
      repo: eventPayload.repository.name,
      tree_sha: eventPayload.before,
    });

    if (!tree) return {};

    const dataFileSha = tree.data.tree.find(
      (file) => file.path === "data"
    )?.sha;

    if (!dataFileSha) return {};

    const dataTree = await octokit.rest.git.getTree({
      owner: eventPayload.repository.owner.login,
      repo: eventPayload.repository.name,
      tree_sha: dataFileSha,
    });

    if (!dataTree) return {};

    const blogPostsFolder = dataTree.data.tree.find((file) =>
      file.path.includes("blog-posts")
    )?.sha;

    if (!blogPostsFolder) return {};

    const blogPostsTree = await octokit.rest.git.getTree({
      owner: eventPayload.repository.owner.login,
      repo: eventPayload.repository.name,
      tree_sha: blogPostsFolder,
    });

    if (!blogPostsTree) return {};

    const blogPostFolder = blogPostsTree.data.tree.find((file) =>
      file.path.includes(fileName)
    )?.sha;

    if (!blogPostFolder) return {};

    const blogPostTree = await octokit.rest.git.getTree({
      owner: eventPayload.repository.owner.login,
      repo: eventPayload.repository.name,
      tree_sha: blogPostFolder,
    });

    if (!blogPostTree) return {};

    const dateFileSha = blogPostTree.data.tree.find((file) =>
      file.path.includes("data.json")
    )?.sha;
    if (!dateFileSha) return {};

    const dataFile = await octokit.rest.git.getBlob({
      owner: eventPayload.repository.owner.login,
      repo: eventPayload.repository.name,
      file_sha: dateFileSha,
    });

    if (!dataFile) return {};

    const data = JSON.parse(
      Buffer.from(dataFile.data.content, "base64").toString("utf8")
    );

    if (!data) return {};

    return data;
  } catch {
    return {};
  }
};
