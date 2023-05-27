import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN || ""
);

export const omit = (obj, keys) => {
  if (!Array.isArray(keys)) keys = [keys];
  if (Array.isArray(obj)) {
    return obj.map((item) => omit(item));
  }

  if (typeof obj === "object") {
    for (const key in obj) {
      if (keys.some((k) => k === key || key.endsWith(k))) {
        delete obj[key];
      } else if (typeof obj[key] === "object") {
        obj[key] = omit(obj[key]);
      }
    }
  }

  return obj;
};

/**
 * @param {string} id
 * @param {string} token
 * @param {Partial<import("discord-api-types/v10").APIMessage>} body
 */
export const sendWebhook = async (id, token, body) => {
  const res = await rest.post(Routes.webhook(id, token), {
    body,
  });

  console.log(res);
};
