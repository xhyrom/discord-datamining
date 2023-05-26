export const objectToString = (obj) => {
  return (
    obj._text ||
    (obj._attributes?.url ? obj._attributes.url : obj._attributes) ||
    obj
  );
};

export const makeAllPropsStrings = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      obj[key] = objectToString(obj[key]);
    }
  }

  return obj;
};
