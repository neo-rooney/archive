module.exports = {
  head: {
    title: "Node Bird",
  },
  modules: ["@nuxtjs/axios", "nuxt-fontawesome"],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
      {
        set: "@fortawesome/free-regular-svg-icons",
        icons: ["far"],
      },
    ],
  },
  css: ["css/global.css"],
  axios: {
    browerBaseURL: "http://localhost:3085",
    baseURL: "http://localhost:3085",
    https: false,
  },
  plugins: [{ src: "@/plugins/vue-slick-carousel.js" }],
};
