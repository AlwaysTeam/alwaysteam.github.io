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
          text: "指南",
          items: [{ text: "关于", link: "/guide/" }],
        },
        {
          text: "模版",
          items: [
            { text: "Vue", link: "/guide/template/vue" },
            { text: "VitePress", link: "/guide/template/vitepress" },
            { text: "hexo", link: "/guide/template/hexo" },
          ],
        },
        {
          text: "地图",
          items: [
            {
              text: "高德地图",
              items: [
                {
                  text: "地图选点",
                  link: "/guide/map/amap/point",
                },
                {
                  text: "车辆轨迹",
                  link: "/guide/map/amap/car_track",
                },
              ],
            },
            {
              text: "腾讯地图",
              items: [
                {
                  text: "地图选点",
                  link: "/guide/map/tencent/point",
                },
                {
                  text: "车辆轨迹",
                  link: "/guide/map/tencent/car_track",
                },
                {
                  text: "路径规划",
                  link: "/guide/map/tencent/planning",
                },
              ],
            },
            {
              text: "百度地图",
              items: [
                {
                  text: "地图选点",
                  link: "/guide/map/baidu/point",
                },
              ],
            },
            {
              text: "天地图",
              items: [
                {
                  text: "地图选点",
                  link: "/guide/map/tianditu/point",
                },
                {
                  text: "车辆轨迹",
                  link: "/guide/map/tianditu/car_track",
                },
              ],
            },
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
