/* eslint-disable @typescript-eslint/no-var-requires */
const svelte = require("prettier-plugin-svelte");
const tailwindcss = require("prettier-plugin-tailwindcss");
const packagejson = require("prettier-plugin-packagejson");

/** @type {require("prettier").Options} */
module.exports = {
  plugins: [svelte, tailwindcss, packagejson],
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
