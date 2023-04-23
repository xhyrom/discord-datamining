import files from "./files.js";
import jsbeautifypkg from "js-beautify";
import { info } from ".../logger.js";
const { js: jsBeautify, css: cssBeautify } = jsbeautifypkg;

export const scripts = await files.scripts.reduce(
  async (previousPromise, script) => {
    info(`Fetching ${script}`);
    const content = await (
      await fetch(`https://canary.discord.com${script}`)
    ).text();

    const contents = await previousPromise;
    contents[script.replace("/assets/", "").replace(".js", "")] = content;
    return contents;
  },
  Promise.resolve({})
);

export const stylesheets = await files.stylesheets.reduce(
  async (previousPromise, stylesheet) => {
    info(`Fetching ${stylesheet}`);
    const content = await (
      await fetch(`https://canary.discord.com${stylesheet}`)
    ).text();

    const contents = await previousPromise;
    contents[stylesheet.replace("/assets/", "").replace(".css", "")] = content;
    return contents;
  },
  Promise.resolve({})
);

export const beautifiedScripts = Object.keys(scripts).reduce(
  (previous, script) => {
    info(`Beautifying js ${script}`);
    previous[script] = jsBeautify(scripts[script]);
    return previous;
  },
  {}
);

export const beautifiedStylesheets = Object.keys(stylesheets).reduce(
  (previous, stylesheet) => {
    info(`Beautifying css ${stylesheet}`);
    previous[stylesheet] = cssBeautify(stylesheets[stylesheet]);
    return previous;
  },
  {}
);

export default {
  scripts,
  stylesheets,
  beautifiedScripts,
  beautifiedStylesheets,
};
