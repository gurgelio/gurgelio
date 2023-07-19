/** @type {require("prettier").Options} */
module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require("prettier-plugin-packagejson"),
    require("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: ['.'],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  astroAllowShorthand: false,
  tailwindConfig: "./tailwind.config.js",
};
