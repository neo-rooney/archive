module.exports = {
  head: {
    title: "Node Bird",
  },
  modules: ["nuxt-fontawesome"],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
    ],
  },
};
