<template>
  <main>
    <h1>Home page</h1>
    <NuxtLink to="/signup">
      signup (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </main>
</template>

<script>
export default {
  async fetch() {},
};
</script>

<style lang="scss" scoped>
</style>