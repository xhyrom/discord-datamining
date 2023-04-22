import kleur from "kleur";

export const info = (message) => {
  console.log(`${kleur.blue("INFO")} ${message}`);
};

export const error = (message) => {
  console.log(`${kleur.red("ERROR")} ${message}`);
};

export const success = (message) => {
  console.log(`${kleur.green("SUCCESS")} ${message}`);
};

export const warn = (message) => {
  console.log(`${kleur.yellow("WARN")} ${message}`);
};
