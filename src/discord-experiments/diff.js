import deepEqual from "fast-deep-equal";

const formatDiff = (value) => {
  return typeof value === "object" ? JSON.stringify(value, null, 2) : value;
};

export const getObjectDiff = (obj1, obj2) => {
  const diff = [];

  function compareObjects(obj1, obj2, path = "") {
    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        diff.push(`- ${path}${key}: ${formatDiff(obj1[key])}`);
      } else if (!deepEqual(obj1[key], obj2[key])) {
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          if (!deepEqual(obj1[key], obj2[key]))
            compareObjects(obj1[key], obj2[key], `${path}${key}.`);
        } else if (
          typeof obj1[key] === "object" &&
          typeof obj2[key] === "object"
        ) {
          if (!deepEqual(obj1[key], obj2[key]))
            compareObjects(obj1[key], obj2[key], `${path}${key}.`);
        } else {
          diff.push(`- ${path}${key}: ${formatDiff(obj1[key])}`);
          diff.push(`+ ${path}${key}: ${formatDiff(obj2[key])}`);
        }
      }
    }

    for (const key in obj2) {
      if (!obj1.hasOwnProperty(key)) {
        diff.push(`+ ${path}${key}: ${formatDiff(obj2[key])}`);
      }
    }
  }

  compareObjects(obj1, obj2);
  return diff;
};
