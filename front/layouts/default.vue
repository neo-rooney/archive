<template>
  <div>
    <Header/>
    <!-- Login Form -->
    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "MainLayout",
  components: {
    Header
  }
};
</script>

<style scoped>
</style>
