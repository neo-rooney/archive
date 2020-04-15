<template>
  <div>
    <PostForm />
    <PostCard />
  </div>
</template>

<script>
import PostForm from "@/components/post/PostForm.vue";
import PostCard from "@/components/post/postCard.vue";

export default {
  name: "Home",
  components: {
    PostForm,
    PostCard
  }
};
</script>

<style scoped>
</style>