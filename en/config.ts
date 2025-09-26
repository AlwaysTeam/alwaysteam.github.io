import { createRequire } from "module";
import { defineAdditionalConfig, type DefaultTheme } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export default defineAdditionalConfig({
  description: "AlwaysTeam description",

  themeConfig: {
    nav: [
      { text: "Home", link: "/en/" },
      { text: "Guide", link: "/en/guide/" },
      { text: "About", link: "/en/about" },
    ],
    sidebar: {
      "/en/guide/": [
        {
          text: "Guide",
          items: [{ text: "Getting Started", link: "/en/guide/" }],
        },
        {
          text: "Template",
          items: [
            { text: "Vue", link: "/en/guide/template/vue" },
            { text: "VitePress", link: "/en/guide/template/vitepress" },
            { text: "Hexo", link: "/en/guide/template/hexo" },
          ],
        },
      ],
    },
    editLink: {
      pattern:
        "https://github.com/AlwaysTeam/AlwaysTeam.github.io/blob/master/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present AlwaysTeam",
    },
    lastUpdated: {
      text: "Last updated",
    },
    outline: {
      label: "On this page",
    },
  },
});
