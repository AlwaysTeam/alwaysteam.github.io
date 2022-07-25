import { defineConfig } from "vitepress";
export default defineConfig({
  lang: "zh-CN",
  appearance: true,
  base: "/",
  title: "VitePress",
  description: "Just playing around.",
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  themeConfig: {
    nav: [
      {
        text: "友链",
        items: [{ text: "天天起始页", link: "https://www.zhangsifan.com" }],
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/jcalways" }],
  },
});
