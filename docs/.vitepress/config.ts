import { defineConfig } from "vitepress";
export default defineConfig({
  lang: "zh-CN",
  appearance: true,
  base: "/",
  title: "VitePress",
  description: "Just playing around.",
  head: [["link", { rel: "", href: "", crossorigin: "" }]],
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Config", link: "/config/" },
      {
        text: "友链",
        items: [
          { text: "天天起始页", link: "https://www.zhangsifan.com" },
          { text: "关于", link: "/about" },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          collapsible: true,
          collapsed: false,
          items: [{ text: "Index", link: "/guide/" }],
        },
      ],
      "/config/": [
        {
          text: "Config",
          collapsible: true,
          collapsed: false,
          items: [{ text: "Index", link: "/config/" }],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/jcalways" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});
