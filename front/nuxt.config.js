export default {
  head: {
    htmlAttrs: {
      lang: "ko",
    },
    title: "오늘의 초상",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, minimal-ui, user-scalable=no",
      },
    ],
  },
  css: ["assets/css/global.css"],
  plugins: [
    { src: "~/plugins/vue-splide.js", ssr: false },
    { src: "~/plugins/vue-moment.js", ssr: false },
  ],
  modules: ["@nuxtjs/axios"],
};
