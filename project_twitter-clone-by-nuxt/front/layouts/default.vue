<template>
  <div>
    <nav>
      <main-navigation-bar />
    </nav>
    <div class="MainLayout__Container">
      <aside class="MainLayout__Login">
        <login-card />
      </aside>
      <div class="MainLayout__Contents">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import MainNavigationBar from "@/components/navigation/MainNavigationBar.vue";
import LoginCard from "@/components/card/LoginCard.vue";
export default {
  name: "MainLayout",
  components: {
    MainNavigationBar,
    LoginCard
  }
};
</script>

<style scoped>
.MainLayout__Container {
  display: flex;
  padding: 20px;
}

.MainLayout__Login {
  flex: 1;
  margin-right: 20px;
}

.MainLayout__Contents {
  flex: 2;
}
</style>