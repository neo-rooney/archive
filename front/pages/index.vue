<template>
  <div>
    <nav>
      <main-navigation-bar />
      <div>홈</div>
    </nav>
  </div>
</template>

<script>
import MainNavigationBar from "@/components/navigation/MainNavigationBar.vue";

export default {
  name: "Home",
  components: {
    MainNavigationBar
  }
};
</script>

<style scoped>
</style>
