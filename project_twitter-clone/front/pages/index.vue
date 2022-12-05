<template>
  <div>
    <PostForm v-if="user" />
    <PostCard v-for="item in contents" :key="item.id" :postData="item" />
  </div>
</template>

<script>
import PostForm from "@/components/post/PostForm.vue";
import PostCard from "@/components/post/PostCard.vue";

export default {
  name: "Home",
  components: {
    PostForm,
    PostCard,
  },
  fetch({ store }) {
    return store.dispatch("posts/loadContents");
  },
  mounted() {
    window.addEventListener("scroll", this.infinitiScroll);
  },
  beforeDestory() {
    window.removeEventListener("scroll", this.infinitiScroll);
  },
  computed: {
    user() {
      return this.$store.state.users.me;
    },
    contents() {
      return this.$store.state.posts.contents;
    },
    hasMoreContents() {
      return this.$store.state.posts.hasMoreContents;
    },
  },
  methods: {
    infinitiScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (this.hasMoreContents) {
          this.$store.dispatch("posts/loadContents");
        }
      }
    },
  },
};
</script>

<style scoped></style>
