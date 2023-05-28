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

/**
 * @param {any[]} array
 * @param {number} size
 * @returns
 */
export const splitArray = (array, size) => {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

/**
 *
 * @param {import("simple-git").SimpleGit} git
 * @param {string} remote
 * @param {string} branch
 * @param {number} tries
 */
export const push = async (git, remote, branch, tries = 0) => {
  try {
    await git.push(remote, branch);
  } catch (e) {
    if (tries > 5) {
      throw e;
    }

    await push(git, remote, branch, tries + 1);
  }
};
