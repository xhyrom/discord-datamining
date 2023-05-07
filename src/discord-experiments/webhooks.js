import { REST } from "@discordjs/rest";
const rest = new REST({ version: "10" });

/**
 * @param {string} id
 * @param {string} token
 * @param {import("discord-api-types/v10").APIEmbed[]} embeds
 * @param {string|null} threadId
 */
export const send = async (id, token, embeds, threadId) => {
  const url = `/webhooks/${id}/${token}${
    threadId ? `?thread_id=${threadId}` : ""
  }`;
  const res = await rest.post(url, {
    body: {
      embeds,
    },
  });

  console.log(res);
};
