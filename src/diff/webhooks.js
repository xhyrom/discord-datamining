import { ButtonStyle, ComponentType } from "discord-api-types/v10";
import { sendWebhook } from "../utils.js";

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

  if (embeds.length > 10) embeds = embeds.slice(0, 10);

  await sendWebhook(id, token, {
    content,
    embeds,
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
