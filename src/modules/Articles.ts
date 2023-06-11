import {
  DATA_DIR,
  writeFile,
  rm,
  getPaginator,
  omit,
  beautify,
} from "../utils.ts";
import { join } from "node:path";
import type { Module } from ".";

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

    await rm(this.baseDir);

    await writeFile(
      join(this.baseDir, "sections.json"),
      JSON.stringify(
        sections.map((s) => omit(s, "updated_at")),
        null,
        2
      )
    );

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
}
