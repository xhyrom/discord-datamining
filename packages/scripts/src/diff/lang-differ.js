import {
  diff,
  buildString,
} from "@xhyrom-forks/discord-datamining-lang-differ";
import getLangStrings from "@xhyrom-forks/discord-datamining-lang-differ/getLangStrings.js";
import getRoutesStrings from "@xhyrom-forks/discord-datamining-lang-differ/getRoutesStrings.js";

export function differStrings(file1, file2) {
  const filesLangStrings = [getLangStrings(file1), getLangStrings(file2)];

  const { addedStrings, updatedStrings, removedStrings } =
    diff(filesLangStrings);

  const builtString = buildString(
    "strings",
    "codeblock",
    addedStrings,
    updatedStrings,
    removedStrings
  );

  return builtString ? builtString : "";
}

export function differRoutes(routes1, routes2) {
  const filesRoutesStrings = [routes1, routes2];

  const { addedStrings, updatedStrings, removedStrings } =
    diff(filesRoutesStrings);

  const builtString = buildString(
    "routes",
    "codeblock",
    addedStrings,
    updatedStrings,
    removedStrings
  );

  return builtString ? builtString : "";
}
