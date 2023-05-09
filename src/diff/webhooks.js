import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

/**
 * @param {unknown} eventPayload
 * @param {import("@octokit/action").RestEndpointMethodTypes["repos"]["createCommitComment"]["response"]["data"]} comment
 * @param {string} id
 * @param {string} token
 * @param {string} content
 * @param {string|null} threadId
 */
export const send = async (
  eventPayload,
  comment,
  id,
  token,
  content,
  roleId,
  threadId
) => {
  const params = new URLSearchParams();

  if (threadId) params.append("thread_id", threadId);

  if (roleId) {
    content = `<@&${roleId}>\n${content}`;
  }

  if (content.length > 2000) {
    content = `${content.slice(
      0,
      1830
    )}...\n\`\`\`\n[You can see full comment here](https://github.com/xHyroM/discord-datamining/commit/${
      eventPayload.after
    }#commitcomment-${comment.id})`;
  }

  const res = await rest.post(Routes.webhook(id, token), {
    query: params,
    body: {
      content,
    },
  });

  console.log(res);
};
