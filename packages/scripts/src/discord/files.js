import { info } from "../logger.js";

info("Scripts and stylesheets are being fetched...");
const text = await (await fetch("https://canary.discord.com/login")).text();

const scriptsRaw = text.match(
  /<script src="\/assets\/[a-z0-9]+\.js"[^>]+><\/script>/g
);

export const scripts = scriptsRaw.map((script) =>
  script.match(/src="[^"]+"/g)[0].slice(5, -1)
);

const stylesheetsRaw = text.match(
  /<link rel="stylesheet" href="\/assets\/[a-z0-9.]+\.css"[^>]+>/g
);

export const stylesheets = stylesheetsRaw.map((stylesheet) =>
  stylesheet.match(/href="[^"]+"/g)[0].slice(6, -1)
);

export default {
  scripts,
  stylesheets,
};
