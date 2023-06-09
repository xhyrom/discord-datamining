import { getPaginator } from "../utils.ts";

export enum ArticleType {
  Normal,
  Dev,
  Creator,
}

interface Article {
  id: number;
  html_url: string;
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

export class Articles {
  public type: ArticleType;

  constructor(type: ArticleType) {
    this.type = type;
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
