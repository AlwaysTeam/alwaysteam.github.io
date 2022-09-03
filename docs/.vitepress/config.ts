import { defineConfig } from "vitepress";
export default defineConfig({
  lang: "zh-CN",
  appearance: true,
  base: "/",
  title: "Always-Team",
  description: "Always-Team",
  head: [["link", { rel: "", href: "", crossorigin: "" }]],
  themeConfig: {
    nav: [
      {
        text: "guide",
        items: [
          {
            text: "Vue3-ElementPlus-Ts-Template",
            link: "https://always-team.github.io/vue3-elementplus-ts-template/",
          },
          {
            text: "VitePress-Template",
            link: "https://always-team.github.io/vitepress-template/",
          },
        ],
      },
      { text: "About", link: "/about" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Always-Team" }],
    footer: {
      message:
        "Released under the <a href='https://opensource.org/licenses/MIT' target='_blank' style='color: #42b883'>MIT License.</a>",
      copyright: "Power By VitePress",
    },
  },
});
