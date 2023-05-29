import { setTimeout as sleep } from "node:timers/promises";

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
 * @returns {Promise<import("simple-git").PushResult>}
 */
export const push = async (git, remote, branch, tries = 0) => {
  let output;
  try {
    output = await git.push(remote, branch);
  } catch (e) {
    if (tries > 10) {
      throw e;
    }

    await sleep(5000);
    output = await push(git, remote, branch, tries + 1);
  }

  return output;
};

/**
 * @param {string} str
 * @returns
 */
export const namilize = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/ /g, "-");
};
