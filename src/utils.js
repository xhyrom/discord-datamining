export const omit = (obj, keys) => {
  if (!Array.isArray(keys)) keys = [keys];
  if (Array.isArray(obj)) {
    return obj.map((item) => omit(item));
  }

  if (typeof obj === "object") {
    for (const key in obj) {
      if (keys.some((k) => k === key || key.endsWith(k))) {
        delete obj[key];
      } else if (typeof obj[key] === "object") {
        obj[key] = omit(obj[key]);
      }
    }
  }

  return obj;
};
