import type { PushResult } from "simple-git";
import type { Sender } from "../index.ts";
import type { Diff } from "../../index.ts";
import {
  chunk,
  getWebhookFromEnv,
  maximumStringLen,
  postToDiscord,
} from "../../../../utils.ts";
import type { APIEmbed } from "discord-api-types/v10";
import { EmbedBuilder } from "@discordjs/builders";
import type { Post } from "../../Blog.ts";

export class DiscordInsidersSender implements Sender<Post> {
  async sendBlog(diff: Diff<Post>, result: PushResult) {
    const embeds: APIEmbed[] = [];

    for (const post of diff.addedPosts) {
      embeds.push(this.buildEmbed("New", post).setColor(0x2cde5c).toJSON());
    }

    for (const post of diff.removedPosts) {
      embeds.push(this.buildEmbed("Removed", post).setColor(0xde2c2c).toJSON());
    }

    for (const post of diff.updatedPosts) {
      if (!post.diff) continue;

      embeds.push(
        this.buildEmbed("Updated", post)
          .setDescription(
            maximumStringLen(`\`\`\`diff\n${post.diff}\n\`\`\``, 3000)
          )
          .setColor(0x2c5cde)
          .toJSON()
      );
    }

    const embedsPerTen = chunk(embeds, 10);

    for (const embeds of embedsPerTen) {
      await postToDiscord(
        getWebhookFromEnv("DISCORDINSIDERS_DISCORD_WEBHOOK_POSTS"),
        result?.update?.hash.to,
        {
          content: "<@&1167155230836789288>",
          embeds,
        }
      );
    }
  }

  private buildEmbed(action: string, post: Post) {
    return new EmbedBuilder()
      .setTitle(`${action} Post`)
      .addFields(
        {
          name: "Title",
          value: post.title ?? "Unknown",
        },
        {
          name: "Description",
          value: maximumStringLen(post.description, 1024) ?? "Unknown",
        },
        {
          name: "Published At",
          value: `<t:${Math.floor(new Date(post.pubDate).getTime() / 1000)}>`,
        },
        {
          name: "Link",
          value: post.link ?? "Unknown",
        }
      )
      .setFooter({
        text: "Powered by xHyroM/discord-datamining",
      });
  }
}
