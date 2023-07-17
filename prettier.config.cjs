/** @type {require("prettier").Options} */
module.exports = {
  plugins: [
    require.resolve("prettier-plugin-packagejson"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
};
