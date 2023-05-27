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
      const data = JSON.parse(
        await readFile(
          join("data", "blog-posts", fileName, "data.json"),
          "utf-8"
        )
      );

      embeds[fileName] = new EmbedBuilder()
        .setTitle("Blog Post Updated")
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
        .setColor(0xe8c61a)
        .toJSON();
    } catch {
      const tree = await octokit.rest.git.getTree({
        owner: eventPayload.repository.owner.login,
        repo: eventPayload.repository.name,
        tree_sha: eventPayload.before,
      });

      const dataFileSha = tree.data.tree.find(
        (file) => file.path === "data"
      )?.sha;

      if (!dataFileSha) continue;

      const dataTree = await octokit.rest.git.getTree({
        owner: eventPayload.repository.owner.login,
        repo: eventPayload.repository.name,
        tree_sha: dataFileSha,
      });

      const blogPostsTree = await octokit.rest.git.getTree({
        owner: eventPayload.repository.owner.login,
        repo: eventPayload.repository.name,
        tree_sha: dataTree.data.tree.find((file) =>
          file.path.includes("blog-posts")
        )?.sha,
      });

      const blogPostTree = await octokit.rest.git.getTree({
        owner: eventPayload.repository.owner.login,
        repo: eventPayload.repository.name,
        tree_sha: blogPostsTree.data.tree.find((file) =>
          file.path.includes(fileName)
        )?.sha,
      });

      const dataFile = await octokit.rest.git.getBlob({
        owner: eventPayload.repository.owner.login,
        repo: eventPayload.repository.name,
        file_sha: blogPostTree.data.tree.find((file) =>
          file.path.includes("data.json")
        )?.sha,
      });

      const data = JSON.parse(
        Buffer.from(dataFile.data.content, "base64").toString("utf8")
      );

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
