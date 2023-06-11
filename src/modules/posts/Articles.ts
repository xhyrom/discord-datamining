import {
  DATA_DIR,
  writeFile,
  rm,
  getPaginator,
  omit,
  beautify,
  readFile,
  formatNumber,
  pushToGit,
  maximumStringLen,
  chunk,
  postToDiscord,
  getWebhookFromEnv,
} from "../../utils.ts";
import { join } from "node:path";
import type { Module } from "../index.ts";
import type { APIEmbed } from "discord-api-types/v10";
import { EmbedBuilder } from "@discordjs/builders";
import { Posts } from "./index.ts";

export enum ArticleType {
  Normal = "normal",
  Dev = "dev",
  Creator = "creator",
}

interface Article {
  id: number;
  html_url: string;
  vote_sum: number;
  vote_count: number;
  section_id: number;
  created_at: string;
  updated_at: string;
  edited_at: string;
  name: string; // title and name are the same
  title: string; // title and name are the same
  label_names: string[];
  body: string;
}

interface Section {
  id: number;
  html_url: string;
  category_id: number;
  position: number;
  sorting: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  theme_template: string;
}

export class Articles implements Module {
  public type: ArticleType;

  constructor(type: ArticleType) {
    this.type = type;
  }

  get baseDir() {
    return join(DATA_DIR, "articles", this.type);
  }

  get baseUrl() {
    switch (this.type) {
      case ArticleType.Normal:
        return "https://support.discord.com";
      case ArticleType.Dev:
        return "https://support-dev.discord.com";
      case ArticleType.Creator:
        return "https://creator-support.discord.com";
    }
  }

  get displayType() {
    switch (this.type) {
      case ArticleType.Normal:
        return "Normal";
      case ArticleType.Dev:
        return "Dev";
      case ArticleType.Creator:
        return "Creator";
    }
  }

  async run() {
    console.log(`Scraping ${this.type} articles`);

    const articles = await this.articles();
    const sections = await this.sections();

    if (articles.length === 0) {
      console.log(`Potentional outage, no articles found for ${this.type}!`);
      return;
    }

    if (sections.length === 0) {
      console.log(`Potentional outage, no sections found for ${this.type}!`);
      return;
    }

    await writeFile(
      join(this.baseDir, "sections.json"),
      JSON.stringify(
        sections.map((s) => omit(s, "updated_at")),
        null,
        2
      )
    );

    const oldArticles = JSON.parse(
      (await readFile(join(this.baseDir, "articles.json"))) ?? "[]"
    );

    await writeFile(
      join(this.baseDir, "articles.json"),
      JSON.stringify(
        articles.map((article) =>
          omit(article, "vote_sum", "vote_count", "updated_at")
        ),
        null,
        2
      )
    );

    await rm(join(this.baseDir, "articles"));

    for (const article of articles) {
      await writeFile(
        join(this.baseDir, "articles", article.id.toString(), "content.md"),
        beautify(article.body, "html")
      );
      await writeFile(
        join(this.baseDir, "articles", article.id.toString(), "meta.json"),
        JSON.stringify(
          omit(article, "body", "vote_sum", "vote_count", "updated_at"),
          null,
          2
        )
      );
    }

    const result = await pushToGit(
      `📚 ${this.displayType} Articles were updated`,
      `Articles (${formatNumber(articles.length)}):\n${articles
        .map((a) => `${a.title}`)
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    const diff = await Posts.diff(
      result.update.hash.from,
      result.update.hash.to,
      `articles/${this.type}/articles`,
      oldArticles,
      articles
    );

    const embeds: APIEmbed[] = [];

    for (const article of diff.addedPosts) {
      embeds.push(
        this.buildEmbed(sections, "New", article).setColor(0x2cde5c).toJSON()
      );
    }

    for (const article of diff.removedPosts) {
      embeds.push(
        this.buildEmbed(sections, "Removed", article)
          .setColor(0xde2c2c)
          .toJSON()
      );
    }

    for (const article of diff.updatedPosts) {
      if (!article.diff) continue;

      embeds.push(
        this.buildEmbed(sections, "Updated", article)
          .setDescription(
            maximumStringLen(`\`\`\`diff\n${article.diff}\n\`\`\``, 4096)
          )
          .setColor(0x2c5cde)
          .toJSON()
      );
    }

    const embedsPerTen = chunk(embeds, 10);

    for (const embeds of embedsPerTen) {
      await postToDiscord(
        getWebhookFromEnv("DISCORD_WEBHOOK_POSTS"),
        result?.update?.hash.to,
        {
          content: "<@&1117371394435600387>",
          embeds,
        }
      );
    }
  }

  async articles(): Promise<Article[]> {
    const res = await getPaginator(
      `${this.baseUrl}/api/v2/help_center/en-us/articles.json`,
      "articles",
      1
    );

    return res;
  }

  async sections(): Promise<Section[]> {
    const res = await getPaginator(
      `${this.baseUrl}/api/v2/help_center/en-us/sections.json`,
      "sections",
      1
    );

    return res;
  }

  private buildEmbed(sections: Section[], action: string, article: Article) {
    return new EmbedBuilder()
      .setTitle(`${action} ${this.displayType} Article`)
      .addFields(
        {
          name: "Title",
          value: article.title ?? article.name,
        },
        {
          name: "Section",
          value:
            sections.find((s) => s.id === article.section_id)?.name ??
            "Unknown",
        },
        {
          name: "Created At",
          value: `<t:${Math.floor(
            new Date(article.created_at).getTime() / 1000
          )}>`,
        },
        {
          name: "Edited At",
          value: `<t:${Math.floor(
            new Date(article.edited_at).getTime() / 1000
          )}>`,
        },
        {
          name: "Link",
          value: article.html_url,
        }
      );
  }
}
