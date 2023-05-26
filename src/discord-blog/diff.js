import { execSync } from "node:child_process";
import { send } from "./webhooks.js";
import { EmbedBuilder } from "@discordjs/builders";
import { makeAllPropsStrings } from "./utils.js";

/**
 * @param {unknown[]} items
 * @param {string} webhookId
 * @param {string} webhookToken
 */
export const diff = async (items, webhookId, webhookToken) => {
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
    acc[articleName][fileName] = file.content;
    return acc;
  }, {});

  for (const [id, article] of Object.entries(articles)) {
    const data = items.find((item) =>
      makeAllPropsStrings(item).link.includes(id)
    );
    if (!data) continue;

    let changesData = `\`\`\`diff\n${article.data}\`\`\``;
    if (changesData.length > 1024) {
      changesData = changesData.slice(0, 1015) + "...```";
    }

    let changesContent = `\`\`\`diff\n${article.content}\`\`\``;
    if (changesContent.length > 1024) {
      changesContent = changesContent.slice(0, 1015) + "...```";
    }

    try {
      const embed = new EmbedBuilder()
        .setTitle("Article Updated")
        .setDescription(data.description ?? "")
        .addFields(
          {
            name: "Title",
            value: data.title ?? "??",
            inline: true,
          },
          {
            name: "Link",
            value: data.link ?? "??",
            inline: true,
          },
          {
            name: "Publish Date",
            value: `<t:${Math.floor(
              new Date(data.pubDate ?? 0).getTime() / 1000
            )}>`,
            inline: true,
          },
          {
            name: "Changes Data",
            value: changesData,
            inline: true,
          },
          {
            name: "Changes Content",
            value: changesContent,
            inline: true,
          }
        )
        .setColor(0xe8c61a);

      await send(
        webhookId,
        webhookToken,
        [embed.toJSON()],
        "1111709102314377358"
      );
    } catch (e) {
      console.log(e);
    }
  }
};
