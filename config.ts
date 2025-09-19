import { createRequire } from "module";
import { defineAdditionalConfig, type DefaultTheme } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export default defineAdditionalConfig({
  description: "AlwaysTeam description",

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "关于", link: "/about" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [{ text: "关于", link: "/guide/" }],
        },
        {
          text: "Template",
          items: [
            { text: "Vue", link: "/guide/template/vue" },
            { text: "VitePress", link: "/guide/template/vitepress" },
            { text: "hexo", link: "/guide/template/hexo" },
          ],
        },
      ],
    },
    editLink: {
      pattern:
        "https://github.com/AlwaysTeam/AlwaysTeam.github.io/blob/master/:path",
      text: "在 GitHub 上编辑此页面",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2025-至今 AlwaysTeam",
    },
    lastUpdated: {
      text: "最后更新于",
    },
    outline: {
      label: "页面导航",
    },
  },
});
