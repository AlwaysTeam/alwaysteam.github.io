import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlwaysTeam",
  titleTemplate: ":title - AlwaysTeam",
  description: "AlwaysTeam description",
  cleanUrls: true,
  lang: "zh-CN",
  sitemap: {
    hostname: "https://team.zhangsifan.com",
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "AlwaysTeam,JCAlways,Vue3,ElementPlus,TypeScript,Template,Tauri,Hexo",
      },
    ],
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
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      description: "AlwaysTeam description",
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "指南", link: "/guide/" },
          { text: "关于", link: "/about" },
        ],
        editLink: {
          pattern:
            "https://github.com/AlwaysTeam/AlwaysTeam.github.io/blob/master/:path",
          text: "在 GitHub 上编辑此页面",
        },
        footer: {
          message: "基于 MIT 许可发布",
          copyright: "版权所有 © 2025-至今 AlwaysTeam",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      description: "AlwaysTeam description",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Guide", link: "/en/guide/" },
          { text: "About", link: "/en/about" },
        ],
        editLink: {
          pattern:
            "https://github.com/AlwaysTeam/AlwaysTeam.github.io/blob/master/:path",
          text: "Edit this page on GitHub",
        },
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2025-present AlwaysTeam",
        },
      },
    },
  },
});
