<template>
  <div>
    <PostForm v-if="user" />
    <PostCard v-for="item in content" :key="item.id" :postData="item"/>
  </div>
</template>

<script>
import PostForm from "@/components/post/PostForm.vue";
import PostCard from "@/components/post/PostCard.vue";

export default {
  name: "Home",
  components: {
    PostForm,
    PostCard
  },
  computed: {
    user() {
      return this.$store.state.users.me;
    },
    content() {
      return this.$store.state.posts.content;
    }
  }
};
</script>

<style scoped>
</style>