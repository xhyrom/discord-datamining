import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  mkdir,
  writeFile as nodeWriteFile,
  rm as nodeRm,
} from "node:fs/promises";
import jsBeautify from "js-beautify";

export const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const DATA_DIR = join(__dirname, "..", "data-new");

export const getPaginator = async (
  url: string,
  dataField: any,
  page: number,
  partial?: any[]
): Promise<any[]> => {
  if (!partial) partial = [];

  const res = await fetch(`${url}?page=${page}&per_page=100`);
  if (!res.ok) return partial;

  const json = await res.json();

  if (json[dataField]) partial.push(...json[dataField]);

  return json[dataField].length > 0
    ? getPaginator(url, dataField, page + 1, partial)
    : partial;
};

export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  ...keys: (keyof T)[]
): Omit<T, K> => {
  const newObj = { ...obj };
  for (const key of keys) delete newObj[key];
  return newObj;
};

export const omitEndsWith = <T extends Record<string, any>>(
  obj: T,
  ...keys: string[]
) => {
  const newObj = { ...obj };
  for (const key of keys) {
    for (const k of Object.keys(newObj)) {
      if (k.endsWith(key)) delete newObj[k];
    }
  }
  return newObj;
};

export const writeFile = async (path: string, data: string) => {
  const dirs =
    process.platform === "linux"
      ? path.split("/").slice(0, -1)
      : path.split("\\").slice(0, -1);

  await mkdir(dirs.join("/"), { recursive: true });

  await nodeWriteFile(path, data);
};

export const rm = async (path: string) => {
  try {
    await nodeRm(path, {
      recursive: true,
      force: true,
    });
  } catch {}
};

export const beautify = (
  content: string,
  type: "js" | "css" | "html"
): string => {
  switch (type) {
    case "js":
      return jsBeautify.js(content);
    case "css":
      return jsBeautify.css(content);
    case "html":
      return jsBeautify.html(content);
  }
};
