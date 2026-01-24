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
import { $ } from "bun";
import simpleGit from "simple-git";
import { REST } from "@discordjs/rest";
import { Octokit } from "@octokit/rest";
import deepEqual from "fast-deep-equal";
import { setTimeout as sleep } from "node:timers/promises";
import { Routes, type APIEmbed, ButtonStyle } from "discord-api-types/v10";
import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import prettier from "prettier";

export const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const DATA_DIR = join(__dirname, "..", "data");

export const git = simpleGit();
export const discordRest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN ?? "",
);
export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN ?? "",
});

export const pushToGit = async (...message: string[]) => {
  const msg: string[] = [];

  for (const m of message) {
    msg.push(maximumStringLen(m, 20000));
  }

  if (process.env.DEBUG === "true") {
    console.log(`Avoiding ${msg} push`);
    return; /*{
      update: {
        hash: "dev-debug",
      },
    };*/
  }

  console.log(await $`git add data/*`);
  const text =
    await $`git commit ${{ raw: msg.map((m) => `-m "${m}"`).join(" ") }}`
      .throws(false)
      .text();

  if (text.includes("Your branch is up to date with")) {
    console.log("Up to date!!");
    return;
  }

  try {
    return await git.push();
  } catch (e) {
    console.log(e);
    console.log(await $`git stash`);
    const text = await $`git pull`.throws(false).text();
    if (text.includes("You can instead skip this commit")) {
      console.log(await $`git rebase --skip`);
    }
    console.log(await $`git stash pop`);
    return await git.push();
  }
};

export const postToGithub = async (commitHash: string, body: string) => {
  return await octokit.repos.createCommitComment({
    owner: "xHyroM",
    repo: "discord-datamining",
    commit_sha: commitHash,
    body: maximumStringLen(body, 65530),
  });
};

interface Webhooks {
  name: string;
  urls: string[];
}

export const postToDiscord = async (
  webhooks: Webhooks,
  pushHash: string | undefined,
  body: {
    content?: string;
    embeds?: APIEmbed[];
  },
  url?: string,
) => {
  for (const webhook of webhooks.urls) {
    const [id, token] = webhook.split("/").slice(-2);

    try {
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
                        : "https://github.com/xHyroM/discord-datamining",
                  ),
              )
              .toJSON(),
          ],
          ...body,
          allowed_mentions: {
            parse: ["roles"],
          },
          auth: false,
        },
      });
    } catch (e) {
      if (process.env.DEBUG === "true") console.log(e);
      console.log(
        "Failed to push ",
        webhooks.name,
        e.toString().replaceAll(id, "").replaceAll(token, ""),
      );
      continue;
    }
  }
};

export const getWebhookFromEnv = (name: string): Webhooks => {
  const webhook =
    process.env[process.env.IS_DEV ? "DISCORD_WEBHOOK_DEV" : name];
  if (!webhook) throw new Error(`Missing webhook: ${name}`);

  try {
    return {
      name,
      urls: JSON.parse(webhook) as string[],
    };
  } catch {
    return {
      name,
      urls: [webhook],
    };
  }
};

export const getPaginator = async (
  url: string,
  dataField: any,
  page: number,
  partial?: any[],
): Promise<any[]> => {
  if (!partial) partial = [];

  const res = await fetch(`${url}?page=${page}&per_page=100`);
  // check for ratelimit
  if (res.status === 429) {
    const body = await res.json();
    const retryAfter = body.retry_after;

    console.log(`[paginator] 429: Waiting ${retryAfter}ms`);

    await sleep(retryAfter + 1000);
    return await getPaginator(url, dataField, page);
  }

  if (!res.ok) return partial;

  const json = await res.json();

  if (json[dataField]) partial.push(...json[dataField]);

  return json[dataField].length > 0
    ? getPaginator(url, dataField, page + 1, partial)
    : partial;
};

export const omit = <T, K extends keyof T>(
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

export const beautify = async (
  content: string,
  type: "js" | "css" | "html",
): Promise<string> => {
  switch (type) {
    case "js":
      return await prettier.format(content, {
        parser: "babel",
      });
    case "css":
      return await prettier.format(content, {
        parser: "css",
      });
    case "html":
      return await prettier.format(content, {
        parser: "html",
      });
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

export async function retry<T>(
  fn: () => Promise<T>,
  retries: number,
  timeout = 1000,
  onRetry?: () => Promise<void>,
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) {
      throw err;
    }
    if (onRetry) {
      await onRetry();
    }
    await new Promise((resolve) => setTimeout(resolve, timeout));
    return retry(fn, retries - 1, timeout, onRetry);
  }
}

export interface ArrayDiff<T> {
  added: T[];
  removed: T[];
  updated: {
    new: T;
    old: T;
    changes: Record<
      string,
      { new: string | number | boolean; old: string | number | boolean }
    >;
  }[];
}

export function createDiff<T extends Record<string, any>>(
  a: T[],
  b: T[],
  compareKey: keyof T,
  updateIgnoreKeys: (keyof T)[] = [],
): ArrayDiff<T> {
  const added: T[] = [];
  const removed: T[] = [];
  const updated: {
    new: T;
    old: T;
    changes: Record<
      string,
      { new: string | number | boolean; old: string | number | boolean }
    >;
  }[] = [];

  for (const b1 of b) {
    const aItem = a.find((item) => item[compareKey] === b1[compareKey]);
    if (!aItem) {
      added.push(b1);
    } else {
      const aItemOmitted = omit(aItem, ...updateIgnoreKeys);
      const b1Omitted = omit(b1, ...updateIgnoreKeys);

      if (!deepEqual(aItemOmitted, b1Omitted)) {
        updated.push({
          old: aItem,
          new: b1,
          changes: getChanges(aItem, b1, updateIgnoreKeys),
        });
      }
    }
  }

  for (const a1 of a) {
    if (!b.some((a) => a[compareKey] === a1[compareKey])) {
      removed.push(a1);
    }
  }

  return { added, removed, updated };
}

export function mergeDiffs<T>(...diffs: ArrayDiff<T>[]): ArrayDiff<T> {
  const added = [];
  const removed = [];
  const updated = [];

  for (const diff of diffs) {
    added.push(...diff.added);
    removed.push(...diff.removed);
    updated.push(...diff.updated);
  }

  return { added, removed, updated };
}

function getChanges<T extends Record<string, any>>(
  oldObj: T,
  newObj: T,
  updateIgnoreKeys: (keyof T)[] = [],
  path = "",
): Record<
  string,
  { new: string | number | boolean; old: string | number | boolean }
> {
  const changes: Record<
    string,
    { new: string | number | boolean; old: string | number | boolean }
  > = {};

  if (oldObj == undefined) oldObj = {} as T;
  if (newObj == undefined) newObj = {} as T;

  for (const key of new Set([...Object.keys(oldObj), ...Object.keys(newObj)])) {
    if (updateIgnoreKeys.includes(key as keyof T)) continue;
    const newPath = path ? `${path}.${key}` : key;

    if (Array.isArray(newObj[key])) {
      (newObj[key] as unknown[]).forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          Object.assign(
            changes,
            getChanges(
              (oldObj?.[key as keyof T] as T[])?.[index] as T,
              item as T,
              updateIgnoreKeys,
              `${newPath}[${index}]`,
            ),
          );
        } else if (!deepEqual((oldObj[key] as unknown[])[index], item)) {
          changes[`${newPath}[${index}]`] = {
            old: (oldObj[key] as unknown[])[index],
            new: item,
          };
        }
      });
    } else if (
      typeof newObj[key] === "object" &&
      newObj[key] !== null &&
      !Array.isArray(newObj[key])
    ) {
      Object.assign(
        changes,
        getChanges(
          oldObj?.[key as keyof T] as T,
          newObj?.[key as keyof T] as T,
          updateIgnoreKeys,
          newPath,
        ),
      );
    } else if (!deepEqual(oldObj[key], newObj[key])) {
      changes[newPath] = { old: oldObj[key], new: newObj[key] };
    }
  }

  return changes;
}
