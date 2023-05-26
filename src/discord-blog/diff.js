import { execSync } from "node:child_process";
import { send } from "./webhooks.js";
import { EmbedBuilder } from "@discordjs/builders";

/**
 * @param {unknown[]} items
 * @param {string} webhookId
 * @param {string} webhookToken
 */
export const diff = (items, webhookId, webhookToken) => {
  const fileNames = execSync("git diff --name-only FETCH_HEAD data/")
    .toString()
    .split("\n");

  const files = fileNames.map((fileName) => {
    if (!fileName) return;
    const content = execSync(`git diff FETCH_HEAD ${fileName}`).toString();
    return { fileName, content };
  });

  const articles = files.reduce((acc, file) => {
    if (!file) return acc;
    const articleName = file.fileName?.split("/")?.[2];
    const fileName = file.fileName
      ?.split("/")?.[3]
      ?.replace(".json", "")
      ?.replace(".html", "");
    if (!articleName || !fileName) return acc;
    if (!acc[articleName]) acc[articleName] = {};
    acc[articleName].title = articleName;
    acc[articleName][fileName] = file.content;
    return acc;
  }, []);

  for (const article of articles) {
    const data = items.find((item) => item.title === article.title);
    let changes = `\`\`\`diff\n${article.changes}\`\`\``;
    if (changes.length > 1024) {
      changes = changes.slice(0, 1015) + "...```";
    }

    const embed = new EmbedBuilder()
      .setTitle("Article Updated")
      .setDescription(data.description)
      .addFields(
        {
          name: "Title",
          value: article.title,
          inline: true,
        },
        {
          name: "Link",
          value: data.link,
          inline: true,
        },
        {
          name: "Publish Date",
          value: `<t:${Math.floor(new Date(data.pubDate).getTime() / 1000)}>`,
          inline: true,
        },
        {
          name: "Changes",
          value: changes,
          inline: true,
        }
      )
      .setColor(0xe8c61a);

    send(webhookId, webhookToken, [embed.toJSON()], "1111709102314377358");
  }
};
