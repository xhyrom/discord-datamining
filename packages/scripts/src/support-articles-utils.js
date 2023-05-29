import deepEqual from "fast-deep-equal";
import { EmbedBuilder, disableValidators } from "@discordjs/builders";
import { info } from "./logger.js";
import { sendWebhook } from "./utils.js";
import { ButtonStyle, ComponentType } from "discord-api-types/v10";
import jsondiffpatch from "jsondiffpatch";
disableValidators();

/**
 * @param {import("./types").Section[]} oldSections
 * @param {import("./types").Section[]} currentSections
 * @param {import("simple-git").PushResult} pushResult
 * @param {string} webhookId
 * @param {string} webhookToken
 * @param {string} roleId
 */
export const watcher = (
  oldSections,
  currentSections,
  pushResult,
  webhookId,
  webhookToken,
  roleId
) => {
  if (deepEqual(oldSections, currentSections)) return;

  const addedSections = currentSections.filter(
    (e) => !oldSections.some((o) => o.id === e.id)
  );

  const removedSections = oldSections.filter(
    (e) => !currentSections.some((o) => o.id === e.id)
  );

  const rechangedSections = currentSections.filter((e) =>
    oldSections.some((o) => o.id === e.id && !deepEqual(o, e))
  );

  console.log(addedSections, removedSections, rechangedSections);
  console.log(oldSections, currentSections);

  if (addedSections.length > 0) {
    info(`Added Sections: ${addedSections.map(sectionNameFormat).join(", ")}`);

    for (const section of addedSections) {
      send(
        webhookId,
        webhookToken,
        roleId,
        [defaultEmbed(section, "add").setColor(0x51f542).toJSON()],
        pushResult
      );
    }
  }

  if (removedSections.length > 0) {
    info(
      `Removed Sections: ${removedSections.map(sectionNameFormat).join(", ")}`
    );

    for (const section of removedSections) {
      send(
        webhookId,
        webhookToken,
        roleId,
        [defaultEmbed(section, "remove").setColor(0xf53731).toJSON()],
        pushResult
      );
    }
  }

  if (rechangedSections.length > 0) {
    info(
      `Changed Sections: ${rechangedSections.map(sectionNameFormat).join(", ")}`
    );

    for (const section of rechangedSections) {
      const oldSection = oldSections.find((e) => e.id === section.id);

      const currentSection = currentSections.find((e) => e.id === section.id);

      const diff = jsondiffpatch.formatters.console.format(
        jsondiffpatch.diff(oldSection, currentSection) || {},
        currentSection
      );

      send(
        webhookId,
        webhookToken,
        roleId,
        [
          defaultEmbed(currentSection, "change").setColor(0xe8c61a).toJSON(),
          new EmbedBuilder()
            .setDescription(
              `\`\`\`ansi\n${
                diff.length > 4083 ? diff.slice(0, 4080) + "..." : diff
              }\`\`\``
            )
            .toJSON(),
        ],
        pushResult
      );
    }
  }
};

/**
 * @param {any} section
 * @param {string} action
 * @returns
 */
const defaultEmbed = (section, action) => {
  let title = "";
  switch (action) {
    case "add":
      title = "New Section";
      break;
    case "remove":
      title = "Section Removed";
      break;
    case "change":
      title = "Section Updated";
  }

  const fields = [
    {
      name: "Name",
      value: sectionNameFormat(section),
      inline: true,
    },
    {
      name: "Description",
      value: section.description || "None",
    },
    {
      name: "Created At",
      value: `<t:${Math.floor(new Date(section.created_at).getTime() / 1000)}>`,
      inline: true,
    },
    {
      name: "Updated At",
      value: `<t:${Math.floor(new Date(section.updated_at).getTime() / 1000)}>`,
      inline: true,
    },
    {
      name: "Sorting",
      value: section.sorting,
      inline: false,
    },
  ];

  return new EmbedBuilder().setTitle(title).addFields(...fields);
};

/**
 *
 * @param {string} id
 * @param {string} token
 * @param {string} roleId
 * @param {import("discord-api-types/v10.js").APIEmbed[]} embeds
 * @param {import("simple-git").PushResult} pushResult
 */
const send = async (id, token, roleId, embeds, pushResult) => {
  await sendWebhook(id, token, {
    content: `<@&${roleId}>`,
    embeds,
    components: [
      {
        type: ComponentType.ActionRow,
        components: [
          {
            type: ComponentType.Button,
            label: "View on GitHub",
            style: ButtonStyle.Link,
            url: `https://github.com/xHyroM/discord-datamining/commit/${
              pushResult.update?.hash.to ?? ""
            }`,
          },
        ],
      },
    ],
  });
};

const sectionNameFormat = (section) => {
  return `${section.name} (${section.id} - cId: ${section.category_id})`;
};
