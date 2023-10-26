import type { PushResult } from "simple-git";
import type { Sender } from "../index.ts";
import type { Diff } from "../../index.ts";
import {
  chunk,
  getWebhookFromEnv,
  maximumStringLen,
  postToDiscord,
} from "../../../../utils.ts";
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10";
import { EmbedBuilder } from "@discordjs/builders";
import type { Post } from "../../Blog.ts";

export class WumpusCentralSender implements Sender<Post> {
  async sendBlog(diff: Diff<Post>, result: PushResult) {
    const commitUrl = `https://github.com/xHyroM/discord-datamining/commit/${result?.update?.hash.to}`;

    const embeds: APIEmbed[] = [];

    for (const post of diff.addedPosts) {
      embeds.push(
        this.buildEmbed("New", post, commitUrl).setColor(0x4cff76).toJSON()
      );
    }

    for (const post of diff.removedPosts) {
      embeds.push(
        this.buildEmbed("Removed", post, commitUrl).setColor(0xff5151).toJSON()
      );
    }

    for (const post of diff.updatedPosts) {
      if (!post.diff) continue;

      embeds.push(
        this.buildEmbed("Updated", post, commitUrl).setColor(0xffe45b).toJSON()
      );
    }

    const embedsPerTen = chunk(embeds, 10);

    for (const embeds of embedsPerTen) {
      await postToDiscord(
        getWebhookFromEnv("WUMPUSCENTRAL_DISCORD_WEBHOOK_POSTS"),
        result?.update?.hash.to,
        {
          content: "<@&1106559083391238276>",
          embeds,
        }
      );
    }
  }

  private buildEmbed(action: string, post: Post, commitUrl: string) {
    const fields: APIEmbedField[] = [
      {
        name: "Title",
        value: post.title ?? "Unknown",
      },
      {
        name: "Description",
        value: maximumStringLen(post.description, 1024) ?? "Unknown",
      },
    ];

    if (action === "Updated") {
      fields.push(
        ...[
          {
            name: "Differences",
            value: `[View Commit](${commitUrl})`,
            inline: true,
          },
          {
            name: "Publication Date",
            value: `<t:${Math.floor(new Date(post.pubDate).getTime() / 1000)}>`,
            inline: true,
          },
          {
            name: "Link",
            value: post.link ?? "Unknown",
          },
        ]
      );
    } else {
      fields.push(
        ...[
          {
            name: "Link",
            value: post.link ?? "Unknown",
            inline: true,
          },
          {
            name: "Publication Date",
            value: `<t:${Math.floor(new Date(post.pubDate).getTime() / 1000)}>`,
            inline: true,
          },
        ]
      );
    }

    const embed = new EmbedBuilder()
      .setTitle(`${action} Blogpost`)
      .addFields(fields);

    if (post["media:thumbnail"]) embed.setImage(post["media:thumbnail"]);

    return embed;
  }
}
