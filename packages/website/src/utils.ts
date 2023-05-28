const stylesheetsFiles = await (
  await fetch(
    "https://api.github.com/repos/xHyroM/discord-datamining/contents/data/stylesheets",
    {
      headers: {
        Authorization: import.meta.env.GITHUB_TOKEN,
      },
    }
  )
).json();

export const stylesheets = await Promise.all(
  stylesheetsFiles.map(async (file) => ({
    name: file.name,
    content: await (await fetch(file.download_url)).text(),
  }))
);
