<template>
  <nav>
    <main-navigation-bar />
    <div>프로필</div>
  </nav>
</template>

<script>
import MainNavigationBar from "@/components/navigation/MainNavigationBar.vue";

export default {
  name: "Profile",
  components: {
    MainNavigationBar
  }
};
</script>

<style scoped>
</style>