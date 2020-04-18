module.exports = {
  plugins: ["@vuepress/blog"],
  title: "torishのストレングスファインダーブログ",
  description: "ようこそ！",
  locales: {
    "/": {
      lang: "ja",
    },
  },
  base: "/styleguide/",
  meta: [
    { charset: "utf-8" },
    { name: "view-port", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#7C4DFF" },
  ],
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "images/lightbulb-on-outline.png",
      },
    ],
    // ["link", { rel: "stylesheet", href: "/styles/adjustment-layout.css" }],
    // ["link", { rel: "stylesheet", href: "/styles/main.css" }],
  ],
  themeConfig: {
    logo: "images/lightbulb-on-outline.png",
    searchPlaceholder: "Search...",
    nav: [
      { text: "Home", link: "/" },
      { text: "Buttons", link: "/buttons" },
      { text: "Typography", link: "/typography" },
      { text: "List", link: "/list" },
      {
        text: "More",
        items: [
          { text: "Twitter", link: "https://twitter.com" },
          { text: "Github", link: "https://github.com" },
          { text: "Facebook", link: "https://facebook.com" },
        ],
      },
    ],
    sidebar: [
      "/",
      // h1, h2 が表示される項目名になる
      "/buttons",
      // 下記の記述だと h1 として表示される項目名を指定できる
      // ['/buttons', 'ボタン']
      "/typography",
      "list",
    ],
  },
};
