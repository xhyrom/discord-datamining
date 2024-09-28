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
} from "../../utils.ts";
import { join } from "node:path";
import type { Module } from "../index.ts";
import { Posts } from "./index.ts";
import { sendArticles } from "./sender/index.ts";

export enum ArticleType {
  Normal = "normal",
  Dev = "dev",
  Creator = "creator",
  Apps = "apps",
}

export interface Article {
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
  draft: boolean;
  promoted: boolean;
  comments_disabled: boolean;
  outdated: boolean;
}

export interface Section {
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
  #sections: Section[] | undefined;

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
      case ArticleType.Apps:
        return "https://support-apps.discord.com";
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
      case ArticleType.Apps:
        return "Apps";
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
        2,
      ),
    );

    const oldArticles = JSON.parse(
      (await readFile(join(this.baseDir, "articles.json"))) ?? "[]",
    );

    await writeFile(
      join(this.baseDir, "articles.json"),
      JSON.stringify(
        articles.map((article) =>
          omit(article, "vote_sum", "vote_count", "updated_at"),
        ),
        null,
        2,
      ),
    );

    await rm(join(this.baseDir, "articles"));

    for (const article of articles) {
      await writeFile(
        join(this.baseDir, "articles", article.id.toString(), "content.md"),
        await beautify(article.body, "html"),
      );
      await writeFile(
        join(this.baseDir, "articles", article.id.toString(), "meta.json"),
        JSON.stringify(
          omit(article, "body", "vote_sum", "vote_count", "updated_at"),
          null,
          2,
        ),
      );
    }

    const result = await pushToGit(
      `📰 ${this.displayType} Articles have been updated`,
      `Articles (${formatNumber(articles.length)}):\n${articles
        .map((a) => `${a.title}`)
        .join("\n")}`,
    );

    if (!result?.update?.hash) return;

    const diff = await Posts.diff(
      result.update.hash.from,
      result.update.hash.to,
      `articles/${this.type}/articles`,
      oldArticles,
      articles,
    );

    await sendArticles(diff, result, this);
  }

  async articles(): Promise<Article[]> {
    const res = await getPaginator(
      `${this.baseUrl}/api/v2/help_center/en-us/articles.json`,
      "articles",
      1,
    );

    return res;
  }

  async sections(): Promise<Section[]> {
    if (this.#sections) return this.#sections;

    const res = await getPaginator(
      `${this.baseUrl}/api/v2/help_center/en-us/sections.json`,
      "sections",
      1,
    );
    this.#sections = res;

    return res;
  }
}
