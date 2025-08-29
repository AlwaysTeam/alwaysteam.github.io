import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlwaysTeam",
  description: "AlwaysTeam description",
  cleanUrls: true,
  lang: "zh-CN",
  sitemap: {
    hostname: "https://team.zhangsifan.com",
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "https://vitepress.dev/vitepress-logo-mini.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://vitepress.dev/vitepress-logo-mini.png",
      },
    ],
  ],

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
      //       link: "https://AlwaysTeam.github.io/vue3-elementplus-ts-template/",
      //     },
      //   ],
      // },
      { text: "Guide", link: "/guide/" },
      { text: "About", link: "/about" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/AlwaysTeam" },
      { icon: "gitlab", link: "https://gitlab.com/AlwaysTeam" },
      { icon: "gitee", link: "https://gitee.com/AlwaysTeam" },
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
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present AlwaysTeam",
    },
    editLink: {
      pattern:
        "https://github.com/AlwaysTeam/AlwaysTeam.github.io/blob/master/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
});
