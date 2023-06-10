import "dotenv/config";
import { push, sendWebhook } from "../utils.js";
import { error, success } from "../logger.js";
import months from "../months.js";

import { ButtonStyle, ComponentType } from "discord-api-types/v10";
import { EmbedBuilder, disableValidators } from "@discordjs/builders";
disableValidators();

import { resolveAny } from "node:dns/promises";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import simpleGit from "simple-git";
import jsondiffpatch from "jsondiffpatch";

import "@pafyll/array";

const [webhookId, webhookToken] = new URL(
  process.env.DISCORD_WEBHOOK_MISCELLANEOUS ?? ""
).pathname
  .split("/")
  .slice(3);

const git = simpleGit({
  baseDir: join("..", ".."),
});

const domain = {
  domain: "discord.com",
  tld: "com",
};

const subdomains = await (
  await fetch(
    "https://api.securitytrails.com/v1/domain/discord.com/subdomains?include_inactive=false",
    {
      headers: {
        APIKEY: process.env.SECURITYTRAILS_API_KEY ?? "",
      },
    }
  )
).json();

const oldDomain = JSON.parse(
  await readFile(join("..", "..", "data", "domain.json"), "utf-8")
);

const records = (await resolveAny("discord.com")).group((r) => r.type);

domain.subdomain_count = subdomains.subdomain_count;
domain.subdomains = subdomains.subdomains;
domain.records = records;

await writeFile(
  join("..", "..", "data", "domain.json"),
  JSON.stringify(domain, null, 2)
);

const result = await git.status();
if (result.files.length === 0) {
  error("No changes");
  process.exit(1);
}

await git.pull();
await git.add(["data/."]);

const date = new Date();

await git.commit([
  `${date.getDate()} ${
    months[date.getMonth()]
  } 🌐 ${date.getFullYear()} - Domains were updated 🚀`,
]);

const pushResult = await push(git, "origin", "master");
success("Successfully pushed 🚀");

if (!pushResult.update) process.exit(0);

const diff = jsondiffpatch.formatters.console.format(
  jsondiffpatch.diff(oldDomain, domain) || {},
  oldDomain
);
await sendWebhook(webhookId, webhookToken, {
  content: "<@&1112738631615008818>\n## Domain",
  embeds: [
    new EmbedBuilder()
      .setDescription(
        `\`\`\`ansi\n${
          diff.length > 4083 ? diff.slice(0, 4080) + "..." : diff
        }\`\`\``
      )
      .toJSON(),
  ],
  components: [
    {
      type: ComponentType.ActionRow,
      components: [
        {
          type: ComponentType.Button,
          label: "View on GitHub",
          style: ButtonStyle.Link,
          url: `https://github.com/xHyroM/discord-datamining/commit/${
            pushResult.update?.hash.to ?? ""
          }`,
        },
      ],
    },
  ],
});
