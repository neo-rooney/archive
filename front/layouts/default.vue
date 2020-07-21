<template>
  <div>
    <nav>
      <main-navigation-bar />
      <nuxt />
    </nav>
  </div>
</template>

<script>
import MainNavigationBar from "@/components/navigation/MainNavigationBar.vue";

export default {
  name: "MainLayout",
  components: {
    MainNavigationBar
  }
};
</script>

<style lang="scss" scoped>
</style>