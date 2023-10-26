import type { PushResult } from "simple-git";
import type { Diff } from "../.";

import { HyrosCoffeeSender as AHCS } from "./articles/hyros_coffee.ts";
import { WumpusCentralSender as AWCS } from "./articles/wumpus_central.ts";
import { DiscordInsidersSender as ADIS } from "./articles/discord_insiders.ts";
import { HyrosCoffeeSender as BHCS } from "./blog/hyros_coffee.ts";
import { WumpusCentralSender as BWCS } from "./blog/wumpus_central.ts";
import { DiscordInsidersSender as BDIS } from "./blog/discord_insiders.ts";

import type { Article, Articles } from "../Articles.ts";
import type { Blog, Post } from "../Blog.ts";

export interface Sender<T> {
  sendArticles?(
    diff: Diff<T>,
    result: PushResult,
    articles: Articles
  ): Promise<void>;
  sendBlog?(diff: Diff<T>, result: PushResult, blog: Blog): Promise<void>;
}

export const sendArticles = async (
  diff: Diff<Article>,
  result: PushResult,
  articles: Articles
) => {
  await new AHCS().sendArticles(diff, result, articles);
  await new AWCS().sendArticles(diff, result, articles);
  await new ADIS().sendArticles(diff, result, articles);
};

export const sendBlog = async (diff: Diff<Post>, result: PushResult) => {
  await new BHCS().sendBlog(diff, result);
  await new BWCS().sendBlog(diff, result);
  await new BDIS().sendBlog(diff, result);
};
