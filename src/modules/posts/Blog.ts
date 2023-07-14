import { xml2js } from "xml-js";
import { JSDOM } from "jsdom";
import jsBeautify from "js-beautify";
import {
  DATA_DIR,
  writeFile,
  rm,
  omit,
  beautify,
  readFile,
  formatNumber,
  pushToGit,
} from "../../utils.ts";
import { join } from "node:path";
import type { Module } from "..";
import { Posts } from "./index.ts";
import { sendBlog } from "./sender/index.ts";

interface RssResponse {
  rss: {
    channel: {
      title: {
        _text: string;
      };
      link: {
        _text: string;
      };
      description: {
        _text: string;
      };
      pubDate: {
        _text: string;
      };
      ttl: {
        _text: string;
      };
      generator: {
        _text: string;
      };
      "atom:link": {
        _attributes: {
          href: string;
          rel: string;
          type: string;
        };
      };
      item: {
        title: {
          _text: string;
        };
        link: {
          _text: string;
        };
        guid: {
          _text: string;
        };
        description: {
          _text: string;
        };
        pubDate: {
          _text: string;
        };
        "media:content": {
          _attributes: {
            url: string;
            medium: string;
          };
        };
        "media:thumbnail": {
          _attributes: {
            url: string;
          };
        };
      }[];
    };
  };
}

interface Channel {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  ttl: number;
  generator: string;
  "atom:link": string;
}

export interface Post {
  id: string; // Custom field, from guid
  body: string; // Custom field
  title: string;
  link: string;
  guid: string;
  description: string;
  pubDate: string;
  "media:content": string;
  "media:thumbnail": string;
}

export class Blog implements Module {
  #data?: RssResponse;

  get baseDir() {
    return join(DATA_DIR, "blog");
  }

  async run() {
    console.log("Scraping blog");

    const posts = await this.posts();
    const channel = await this.channel();

    if (posts.length === 0) {
      console.log("Potentional outage, no posts found!");
      return;
    }

    if (!channel) {
      console.log("Potentional outage, no channel found!");
      return;
    }

    await writeFile(
      join(this.baseDir, "channel.json"),
      JSON.stringify(channel, null, 2)
    );

    const oldPosts = JSON.parse(
      (await readFile(join(this.baseDir, "posts.json"))) ?? "[]"
    );

    await writeFile(
      join(this.baseDir, "posts.json"),
      JSON.stringify(posts, null, 2)
    );

    await rm(join(this.baseDir, "posts"));

    for (const post of posts) {
      await writeFile(
        join(this.baseDir, "posts", post.id, "content.md"),
        beautify(post.body, "html")
      );
      await writeFile(
        join(this.baseDir, "posts", post.id, "meta.json"),
        JSON.stringify(omit(post, "body"), null, 2)
      );
    }

    const result = await pushToGit(
      `📰 Blog posts were updated`,
      `Posts (${formatNumber(posts.length)}):\n${posts
        .map((a) => `${a.title}`)
        .join("\n")}`
    );

    if (!result?.update?.hash) return;

    const diff = await Posts.diff(
      result.update.hash.from,
      result.update.hash.to,
      "blog/posts",
      oldPosts,
      posts
    );

    await sendBlog(diff, result);
  }

  async channel(): Promise<Channel | null> {
    const data = await this.data();
    if (!data) return null;

    return {
      title: data.rss.channel.title._text,
      link: data.rss.channel.link._text,
      description: data.rss.channel.description._text,
      pubDate: data.rss.channel.pubDate._text,
      ttl: Number(data.rss.channel.ttl._text),
      generator: data.rss.channel.generator._text,
      "atom:link": data.rss.channel["atom:link"]._attributes.href,
    };
  }

  async posts(): Promise<Post[]> {
    const data = await this.data();
    if (!data) return [];

    const posts = [];

    for (const post of data.rss.channel.item) {
      const body = await (await fetch(post.link._text)).text();
      const dom = new JSDOM(body);

      let querySelector = dom.window.document.querySelector(
        ".blog-post-container > div:first-child > div:nth-child(2)"
      )?.outerHTML;
      if (!querySelector)
        querySelector =
          dom.window.document.querySelector(".blog-post-content")?.outerHTML;

      const beautifiedBody = jsBeautify.html_beautify(querySelector ?? "");

      posts.push({
        id: post.guid._text.split("/").pop() as string,
        body: beautifiedBody,
        title: post.title._text,
        link: post.link._text,
        guid: post.guid._text,
        description: post.description._text,
        pubDate: post.pubDate._text,
        "media:content": post["media:content"]._attributes.url,
        "media:thumbnail": post["media:thumbnail"]._attributes.url,
      });
    }

    return posts;
  }

  async data(): Promise<RssResponse | null> {
    if (this.#data) return this.#data;

    const res = await fetch("https://discord.com/blog/rss.xml");
    if (!res.ok) return null;

    const text = await res.text();
    const parsed = xml2js(text, {
      compact: true,
    }) as RssResponse;

    this.#data = parsed;

    return parsed;
  }
}
