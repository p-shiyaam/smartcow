export const isEmpty = (value: any) => {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === "string") {
    return value.trim().length === 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  return false;
};

export const splitName = (name: string) => {
  const firstName = name.split(" ").slice(0, -1).join(" ");
  const lastName = name.split(" ").slice(-1).join(" ");
  return { firstName, lastName };
};

export const localstorage = {
  get: (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "null");
  },
  isExisting: (key: string): boolean => {
    return localStorage.getItem(key) !== null;
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
