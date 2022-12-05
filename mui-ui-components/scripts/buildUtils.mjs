import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const fs = require("fs");

export const getFolders = (entry) => {
  const dirs = fs.readdirSync(entry);
  const dirsWithoutIndex = dirs
    .filter((name) => name !== "index.ts")
    .filter((name) => name !== "utils");
  return dirsWithoutIndex;
};
