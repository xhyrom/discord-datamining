export const namilize = (str) => {
  return str.replace("/assets/", "").replace(".js", "").replace(".css", "");
};
