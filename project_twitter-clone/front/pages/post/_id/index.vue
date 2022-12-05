<template>
  <div v-if="post">
    <post-card :postData="post"/>
  </div>
  <div v-else>게시글을 찾을 수 없습니다.</div>
</template>

<script>
import PostCard from "@/components/post/PostCard.vue";
export default {
  name: "Post",
  components: {
    PostCard
  },
  computed: {
    post() {
      return this.$store.state.posts.content.find(
        item => item.id === parseInt(this.$route.params.id)
      );
    }
  }
};
</script>

<style scoped>
</style>