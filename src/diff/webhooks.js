import { ButtonStyle, ComponentType } from "discord-api-types/v10";
import { sendWebhook, splitArray } from "../utils.js";

/**
 * @param {any} eventPayload
 * @param {import("@octokit/action").RestEndpointMethodTypes["repos"]["createCommitComment"]["response"]["data"]} comment
 * @param {string} id
 * @param {string} token
 * @param {string} content
 */
export const send = async (
  eventPayload,
  comment,
  id,
  token,
  content,
  roleId
) => {
  if (roleId) {
    content = `<@&${roleId}>\n${content}`;
  }

  if (content.length > 2000) {
    content = `${content.slice(0, 1990)}...\n\`\`\``;
  }

  await sendWebhook(id, token, {
    content,
    components: [
      {
        type: ComponentType.ActionRow,
        components: [
          {
            type: ComponentType.Button,
            label: "View on GitHub",
            style: ButtonStyle.Link,
            url: `https://github.com/xHyroM/discord-datamining/commit/${eventPayload.after}#commitcomment-${comment.id}`,
          },
        ],
      },
    ],
  });
};

/**
 * @param {any} eventPayload
 * @param {import("@octokit/action").RestEndpointMethodTypes["repos"]["createCommitComment"]["response"]["data"]} comment
 * @param {string} id
 * @param {string} token
 * @param {import("discord-api-types/v10.js").APIEmbed[]} embeds
 */
export const sendEmbeds = async (
  eventPayload,
  comment,
  id,
  token,
  embeds,
  roleId
) => {
  const content = roleId ? `<@&${roleId}>\n` : "";

  const embedsSplitted = splitArray(embeds, 10);

  for (const embds of embedsSplitted) {
    await sendWebhook(id, token, {
      content,
      embeds: embds,
      components: [
        {
          type: ComponentType.ActionRow,
          components: [
            {
              type: ComponentType.Button,
              label: "View on GitHub",
              style: ButtonStyle.Link,
              url: `https://github.com/xHyroM/discord-datamining/commit/${eventPayload.after}#commitcomment-${comment.id}`,
            },
          ],
        },
      ],
    });
  }
};
