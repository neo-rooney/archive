<template>
  <div>
    <Header />
    <div class="MainLayout__Layout">
      <login-form class="MainLayout__LoginForm" />
      <nuxt class="MainLayout__Content" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import LoginForm from "@/components/common/LoginForm.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    LoginForm
  }
};
</script>

<style scoped>
.MainLayout__Layout {
  display: flex;
  margin :10px
}

.MainLayout__LoginForm {
  flex: 1;
  min-height: 100vh;
  margin-right: 30px;
}
.MainLayout__Content {
  flex: 2;
  min-height: 100vh;
}
</style>
