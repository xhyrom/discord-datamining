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
      const before = await getBlogPostOrSupportArticleFromBeforeCommit(
        octokit,
        eventPayload,
        "blog-posts"
      );
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
      const data = await getBlogPostOrSupportArticleFromBeforeCommit(
        octokit,
        eventPayload,
        "blog-posts"
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

/**
 * @param {import('@octokit/action').Octokit} octokit
 * @param {unknown} eventPayload
 */
export const supportArticles = async (octokit, eventPayload, dev) => {
  const diff = await octokit.repos.compareCommits({
    owner: eventPayload.repository.owner.login,
    repo: eventPayload.repository.name,
    base: eventPayload.before,
    head: eventPayload.after,
  });

  let comment = "";

  const path = `support${dev ? "-dev" : ""}-articles`;
  const name = dev ? "Support Dev Article" : "Support Article";
  const articles = diff.data.files.filter((file) =>
    file.filename.includes(path)
  );
  const embeds = {};

  for (const article of articles) {
    if (!article.patch) continue;

    const fileName = article.filename.split("/")[2];
    comment += `## ${fileName}\n\n`;
    comment += "```diff\n";
    comment += article.patch;
    comment += "\n```\n\n";

    try {
      const before = await getBlogPostOrSupportArticleFromBeforeCommit(
        octokit,
        eventPayload,
        path,
        fileName
      );
      const data = JSON.parse(
        await readFile(join("data", path, fileName, "data.json"), "utf-8")
      );

      embeds[fileName] = new EmbedBuilder()
        .setTitle(
          before?.title ?? before?.name ? `${name} Updated` : `New ${name}`
        )
        .addFields(
          {
            name: "Title",
            value: data.title ?? data.name,
          },
          {
            name: "Created At",
            value: `<t:${Math.floor(
              new Date(data.created_at).getTime() / 1000
            )}>`,
          },
          {
            name: "Updated At",
            value: data.updated_at
              ? `<t:${Math.floor(new Date(data.updated_at).getTime() / 1000)}>`
              : "Never",
          },
          {
            name: "Edited At",
            value: data.edited_at
              ? `<t:${Math.floor(new Date(data.edited_at).getTime() / 1000)}>`
              : "Never",
          },
          {
            name: "Link",
            value: data.html_url,
          }
        )
        .setColor(before?.title ?? before?.name ? 0xe8c61a : 0x51f542)
        .toJSON();
    } catch {
      const data = await getBlogPostOrSupportArticleFromBeforeCommit(
        octokit,
        eventPayload,
        path,
        fileName
      );

      embeds[fileName] = new EmbedBuilder()
        .setTitle(`${name} Removed`)
        .addFields(
          {
            name: "Title",
            value: data.title ?? data.name,
          },
          {
            name: "Created At",
            value: `<t:${Math.floor(
              new Date(data.created_at).getTime() / 1000
            )}>`,
          },
          {
            name: "Updated At",
            value: data.updated_at
              ? `<t:${Math.floor(new Date(data.updated_at).getTime() / 1000)}>`
              : "Never",
          },
          {
            name: "Edited At",
            value: data.edited_at
              ? `<t:${Math.floor(new Date(data.edited_at).getTime() / 1000)}>`
              : "Never",
          },
          {
            name: "Link",
            value: data.html_url,
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
const getBlogPostOrSupportArticleFromBeforeCommit = async (
  octokit,
  eventPayload,
  type,
  fileName
) => {
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

    const blogPostsOrArticlesFolder = dataTree.data.tree.find((file) =>
      file.path.includes(type)
    )?.sha;

    if (!blogPostsOrArticlesFolder) return {};

    const blogPostsOrArticlesTree = await octokit.rest.git.getTree({
      owner: eventPayload.repository.owner.login,
      repo: eventPayload.repository.name,
      tree_sha: blogPostsOrArticlesFolder,
    });

    if (!blogPostsOrArticlesTree) return {};

    const blogPostOrArticleFolder = blogPostsOrArticlesTree.data.tree.find(
      (file) => file.path.includes(fileName)
    )?.sha;

    if (!blogPostOrArticleFolder) return {};

    const blogPostOrArticleTree = await octokit.rest.git.getTree({
      owner: eventPayload.repository.owner.login,
      repo: eventPayload.repository.name,
      tree_sha: blogPostOrArticleFolder,
    });

    if (!blogPostOrArticleTree) return {};

    const dateFileSha = blogPostOrArticleTree.data.tree.find((file) =>
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
