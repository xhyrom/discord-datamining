import type { PushResult } from "simple-git";
import type { Sender } from "..";
import type { Diff } from "../../.";
import { chunk, getWebhookFromEnv, postToDiscord } from "../../../../utils.ts";
import type { APIEmbed, APIEmbedField } from "discord-api-types/v10";
import { EmbedBuilder } from "@discordjs/builders";
import type { Article, Articles, Section } from "../../Articles.ts";

export class WumpusCentralSender implements Sender<Article> {
  async sendArticles(
    diff: Diff<Article>,
    result: PushResult,
    articles: Articles
  ) {
    const sections = await articles.sections();
    const displayType = articles.displayType;
    const commitUrl = `https://github.com/xHyroM/discord-datamining/commit/${result?.update?.hash.to}`;

    const embeds: APIEmbed[] = [];

    for (const article of diff.addedPosts) {
      embeds.push(
        this.buildEmbed(sections, "New", article, displayType, commitUrl)
          .setColor(0x4cff76)
          .toJSON()
      );
    }

    for (const article of diff.removedPosts) {
      embeds.push(
        this.buildEmbed(sections, "Removed", article, displayType, commitUrl)
          .setColor(0xff5151)
          .toJSON()
      );
    }

    for (const article of diff.updatedPosts) {
      if (!article.diff) continue;

      embeds.push(
        this.buildEmbed(sections, "Updated", article, displayType, commitUrl)
          .setColor(0xffe45b)
          .toJSON()
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

  private buildEmbed(
    sections: Section[],
    action: string,
    article: Article,
    displayType: string,
    commitUrl: string
  ) {
    const fields: APIEmbedField[] = [
      {
        name: "Title",
        value: article.title ?? article.name,
        inline: true,
      },
      {
        name: "Section",
        value:
          sections.find((s) => s.id === article.section_id)?.name ?? "Unknown",
        inline: true,
      },
    ];

    if (action === "Updated") {
      fields.push(
        ...[
          {
            name: "Creation Date",
            value: `<t:${Math.floor(
              new Date(article.created_at).getTime() / 1000
            )}>`,
            inline: true,
          },
          {
            name: "Differences",
            value: `[View Changes](${commitUrl})`,
            inline: false,
          },
        ]
      );
    }

    fields.push({
      name: "Link",
      value: article.html_url,
      inline: false,
    });

    return new EmbedBuilder()
      .setTitle(`${action} ${displayType} Article`)
      .addFields(fields);
  }
}
