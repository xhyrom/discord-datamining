import { ButtonStyle, ComponentType } from "discord-api-types/v10";
import { sendWebhook } from "../utils";

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
