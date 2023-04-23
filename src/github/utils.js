export const omit = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => omit(item));
  }

  if (typeof obj === "object") {
    for (const key in obj) {
      if (key.endsWith("_url")) {
        delete obj[key];
      } else if (typeof obj[key] === "object") {
        obj[key] = omit(obj[key]);
      }
    }
  }

  return obj;
};
