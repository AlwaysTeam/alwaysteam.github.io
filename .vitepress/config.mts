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
      //       link: "https://always-team.github.io/vue3-elementplus-ts-template/",
      //     },
      //   ],
      // },
      { text: "Guide", link: "/guide/" },
      { text: "About", link: "/about" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Always-Team" },
      {
        icon: {
          svg: '<svg t="1662189434749" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="743" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="744"></path></svg>',
        },
        link: "https://gitee.com/JC_Always",
      },
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
      copyright: "Copyright © 2024-present Always-Team",
    },
    editLink: {
      pattern:
        "https://github.com/Always-Team/always-team.github.io/blob/master/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
});
