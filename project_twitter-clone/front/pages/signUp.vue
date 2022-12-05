<template>
  <div>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from "../components/signUp/SignUpForm.vue";

export default {
  name: "signUp",
  components: {
    SignUpForm
  },
  computed: {
    user() {
      return this.$store.state.users.me;
    }
  },
  watch: {
    user(value, oldValue) {
      if (value) {
        this.$router.push({
          path: "/"
        });
      }
    }
  },
  head() {
    return {
      title: "회원가입"
    };
  },
  middleware: "anonymous"
};
</script>

<style scoped>
</style>