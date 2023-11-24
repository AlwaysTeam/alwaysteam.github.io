import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Always-Team",
  description: "Always-Team description",
  cleanUrls: true,
  lang: "zh-CN",
  sitemap: {
    hostname: 'https://team.zhangsifan.com'
  },
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
      //     {
      //       text: "VitePress-Template",
      //       link: "https://always-team.github.io/vitepress-template/",
      //     },
      //   ],
      // },
      { text: "About", link: "/about" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Always-Team" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Always-Team",
    },
  },
});
