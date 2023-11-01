import type { PushResult } from "simple-git";
import type { Sender } from "..";
import type { Diff } from "../../.";
import {
  chunk,
  getWebhookFromEnv,
  maximumStringLen,
  postToDiscord,
} from "../../../../utils.ts";
import type { APIEmbed } from "discord-api-types/v10";
import { EmbedBuilder } from "@discordjs/builders";
import type { Article, Articles, Section } from "../../Articles.ts";

export class DiscordInsidersSender implements Sender<Article> {
  async sendArticles(
    diff: Diff<Article>,
    result: PushResult,
    articles: Articles
  ) {
    const sections = await articles.sections();
    const displayType = articles.displayType;

    const embeds: APIEmbed[] = [];

    for (const article of diff.addedPosts) {
      embeds.push(
        this.buildEmbed(sections, "New", article, displayType)
          .setColor(0x2cde5c)
          .toJSON()
      );
    }

    for (const article of diff.removedPosts) {
      embeds.push(
        this.buildEmbed(sections, "Removed", article, displayType)
          .setColor(0xde2c2c)
          .toJSON()
      );
    }

    for (const article of diff.updatedPosts) {
      if (!article.diff) continue;

      embeds.push(
        this.buildEmbed(sections, "Updated", article, displayType)
          .setDescription(
            maximumStringLen(`\`\`\`diff\n${article.diff}\n\`\`\``, 3000)
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

  private buildEmbed(
    sections: Section[],
    action: string,
    article: Article,
    displayType: string
  ) {
    return new EmbedBuilder()
      .setTitle(`${action} ${displayType} Article`)
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
        },
        {
          name: "Outdated",
          value: article.outdated ? "✅" : "❌",
          inline: true,
        },
        {
          name: "Draft",
          value: article.draft ? "✅" : "❌",
          inline: true,
        },
        {
          name: "Comments Enabled",
          value: !article.comments_disabled ? "✅" : "❌",
          inline: true,
        }
      )
      .setFooter({
        text: "Powered by xHyroM/discord-datamining",
      });
  }
}
