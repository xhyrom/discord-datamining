/**
  *  discord-dataming - powerful discord datamining, datamines discord
  *  Copyright (C) 2023 Jozef Steinhübl

  *  This program is free software: you can redistribute it and/or modify
  *  it under the terms of the GNU General Public License as published by
  *  the Free Software Foundation, either version 3 of the License, or
  *  (at your option) any later version.

  *  This program is distributed in the hope that it will be useful,
  *  but WITHOUT ANY WARRANTY; without even the implied warranty of
  *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  *  GNU General Public License for more details.
 
  *  You should have received a copy of the GNU General Public License
  *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  * **/

import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  mkdir,
  writeFile as nodeWriteFile,
  rm as nodeRm,
  readFile as nodeReadFile,
  access as nodeAccess,
  constants,
} from "node:fs/promises";
import jsBeautify from "js-beautify";
import simpleGit from "simple-git";
import { REST } from "@discordjs/rest";
import { Octokit } from "@octokit/rest";
import { Routes, type APIEmbed, ButtonStyle } from "discord-api-types/v10";
import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";

export const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const DATA_DIR = join(__dirname, "..", "data");

export const git = simpleGit();
export const discordRest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN ?? ""
);
export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN ?? "",
});

export const pushToGit = async (...message: string[]) => {
  const msg = [];

  for (const m of message) {
    msg.push(maximumStringLen(m, 20000));
  }

  await git.add("data/*");
  await git.commit(msg);
  return await git.push();
};

export const postToGithub = async (commitHash: string, body: string) => {
  return await octokit.repos.createCommitComment({
    owner: "xHyroM",
    repo: "discord-datamining",
    commit_sha: commitHash,
    body: maximumStringLen(body, 65530),
  });
};

export const postToDiscord = async (
  webhooks: string[],
  pushHash: string | undefined,
  body: {
    content?: string;
    embeds?: APIEmbed[];
  },
  url?: string
) => {
  for (const webhook of webhooks) {
    const [id, token] = webhook.split("/").slice(-2);

    await discordRest.post(Routes.webhook(id!, token!), {
      body: {
        components: [
          new ActionRowBuilder()
            .setComponents(
              new ButtonBuilder()
                .setLabel("View on GitHub")
                .setStyle(ButtonStyle.Link)
                .setURL(
                  url
                    ? url
                    : pushHash
                    ? `https://github.com/xHyroM/discord-datamining/commit/${pushHash}`
                    : "https://github.com/xHyroM/discord-datamining"
                )
            )
            .toJSON(),
        ],
        ...body,
        allowed_mentions: {
          parse: ["roles"],
        },
      },
    });
  }
};

export const getWebhookFromEnv = (name: string): string[] => {
  const webhook =
    process.env[process.env.IS_DEV ? "DISCORD_WEBHOOK_DEV" : name];
  if (!webhook) throw new Error(`Missing webhook: ${name}`);

  try {
    return JSON.parse(webhook) as string[];
  } catch {
    return [webhook];
  }
};

export const getPaginator = async (
  url: string,
  dataField: any,
  page: number,
  partial?: any[]
): Promise<any[]> => {
  if (!partial) partial = [];

  const res = await fetch(`${url}?page=${page}&per_page=100`);
  if (!res.ok) return partial;

  const json = await res.json();

  if (json[dataField]) partial.push(...json[dataField]);

  return json[dataField].length > 0
    ? getPaginator(url, dataField, page + 1, partial)
    : partial;
};

export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: (keyof T)[]
): Omit<T, K> => {
  const newObj = { ...obj };
  for (const key of keys) delete newObj[key];
  return newObj;
};

export const omitEndsWith = <T extends Record<string, any>>(
  obj: T,
  ...keys: string[]
) => {
  const newObj = { ...obj };
  for (const key of keys) {
    for (const k of Object.keys(newObj)) {
      if (k.endsWith(key)) delete newObj[k];
    }
  }
  return newObj;
};

export const exist = async (path: string) => {
  try {
    await nodeAccess(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export const readFile = async (path: string) => {
  if (!(await exist(path))) return null;

  return await nodeReadFile(path, "utf8");
};

export const writeFile = async (path: string, data: string) => {
  const dirs =
    process.platform === "linux"
      ? path.split("/").slice(0, -1)
      : path.split("\\").slice(0, -1);

  await mkdir(dirs.join("/"), { recursive: true });

  await nodeWriteFile(path, data);
};

export const rm = async (path: string) => {
  try {
    await nodeRm(path, {
      recursive: true,
      force: true,
    });
  } catch {}
};

export const beautify = (
  content: string,
  type: "js" | "css" | "html"
): string => {
  switch (type) {
    case "js":
      return jsBeautify.js(content);
    case "css":
      return jsBeautify.css(content);
    case "html":
      return jsBeautify.html(content);
  }
};

export const formatNumber = (number: number) => {
  return number.toLocaleString("en-US");
};

export const maximumStringLen = (str: string, max: number) => {
  if (str.startsWith("```") && str.endsWith("```")) {
    return str.length > max ? str.slice(0, max - 6) + "...```" : str;
  }

  return str.length > max ? str.slice(0, max - 3) + "..." : str;
};

export const chunk = <T>(array: T[], size: number): T[][] => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export const numberPad = (num: number): string => {
  if (num < 10) {
    return `0${num}`;
  }

  return num.toString();
};
