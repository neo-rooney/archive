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
    ],
  },
  css: ["css/global.css"],
};
