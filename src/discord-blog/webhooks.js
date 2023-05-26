import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

/**
 * @param {string} id
 * @param {string} token
 * @param {import("discord-api-types/v10").APIEmbed[]} embeds
 * @param {string|null} threadId
 */
export const send = async (id, token, embeds, threadId) => {
  const params = new URLSearchParams();

  if (threadId) params.append("thread_id", threadId);

  const res = await rest.post(Routes.webhook(id, token), {
    query: params,
    body: {
      content: "<@&1111708976309084201>",
      embeds,
    },
  });

  console.log(res);
};
