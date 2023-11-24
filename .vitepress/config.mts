import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Always-Team",
  description: "Always-Team description",
  cleanUrls: true,
  lang: "zh-CN",
  sitemap: {
    hostname: "https://team.zhangsifan.com",
  },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // {
      //   text: "guide",
      //   items: [
      //     {
      //       text: "Vue3-ElementPlus-Ts-Template",
      //       link: "https://always-team.github.io/vue3-elementplus-ts-template/",
      //     },
      //   ],
      // },
      { text: "Guide", link: "/guide/" },
      { text: "About", link: "/about" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Always-Team" }],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "关于", link: "/guide/" },
          ],
        },
        {
          text: "Template",
          items: [
            { text: "Vue", link: "/guide/template/vue" },
            { text: "VitePress", link: "/guide/template/vitepress" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Always-Team",
    },
    editLink: {
      pattern:
        "https://github.com/Always-Team/always-team.github.io/blob/master/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
});
