const namilize = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/ /g, "-");
};

const dataFiles = await (
  await fetch(
    "https://api.github.com/repos/xHyroM/discord-datamining/contents/data",
    {
      headers: {
        Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
      },
    }
  )
).json();

const stylesheetsFiles = await (
  await fetch(
    "https://api.github.com/repos/xHyroM/discord-datamining/contents/data/stylesheets",
    {
      headers: {
        Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
      },
    }
  )
).json();

export const stylesheets = await Promise.all([
  {
    name: "current.css",
    content: await (
      await fetch(dataFiles.find((f) => f.name === "current.css").download_url)
    ).text(),
  },
  ...stylesheetsFiles.map(async (file) => ({
    name: file.name,
    content: await (await fetch(file.download_url)).text(),
  })),
]);

const scriptsFiles = await (
  await fetch(
    "https://api.github.com/repos/xHyroM/discord-datamining/contents/data/scripts",
    {
      headers: {
        Authorization: import.meta.env.GITHUB_TOKEN,
      },
    }
  )
).json();

export const scripts = await Promise.all([
  {
    name: "current.js",
    content: await (
      await fetch(dataFiles.find((f) => f.name === "current.js").download_url)
    ).text(),
  },
  ...scriptsFiles.map(async (file) => ({
    name: file.name,
    content: await (await fetch(file.download_url)).text(),
  })),
]);

const blogPostsFolders = await (
  await fetch(
    "https://api.github.com/repos/xHyroM/discord-datamining/contents/data/blog-posts",
    {
      headers: {
        Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
      },
    }
  )
).json();

export const blogPosts = await Promise.all(
  blogPostsFolders
    .filter((f) => f.name !== "channel.json")
    .map(async (folder) => {
      const data = await (
        await fetch(
          `https://raw.githubusercontent.com/xHyroM/discord-datamining/master/data/blog-posts/${folder.name}/data.json`
        )
      ).json();

      return {
        id: namilize(data.title),
        data,
        content: await (
          await fetch(
            `https://raw.githubusercontent.com/xHyroM/discord-datamining/master/data/blog-posts/${folder.name}/content.md`
          )
        ).text(),
      };
    })
);
