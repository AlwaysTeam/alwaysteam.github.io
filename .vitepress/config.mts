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
    socialLinks: [
      { icon: "github", link: "https://github.com/AlwaysTeam" },
      { icon: "gitlab", link: "https://gitlab.com/AlwaysTeam" },
      { icon: "gitee", link: "https://gitee.com/AlwaysTeam" },
    ],
  },
  locales: {
    root: { label: "中文", lang: "zh-CN" },
    en: { label: "English", lang: "en" },
  },
});
