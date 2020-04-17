module.exports = {
  head: [["link", { rel: "stylesheet", href: "/styles/main.css" }]],
  themeConfig: {
    sidebar: [
      "/",
      "/buttons", // h1, h2 が表示される項目名になる
      // 下記の記述だと h1 として表示される項目名を指定できる
      // ['/buttons', 'ボタン']
      "/typography",
      "list",
    ],
  },
};
