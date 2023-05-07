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
  threadId
) => {
  const url = `https://discord.com/api/webhooks/${id}/${token}${
    threadId ? `?thread_id=${threadId}` : ""
  }`;

  if (content.length > 2000) {
    content = `${content.slice(
      0,
      1830
    )}...\n\`\`\`\n[You can see full comment here](https://github.com/xHyroM/discord-datamining/commit/${
      eventPayload.after
    }#commitcomment-${comment.id})`;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      thread_id: threadId,
    }),
  });

  !res.ok && console.error(await res.text());
};
