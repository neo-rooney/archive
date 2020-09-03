<template>
  <div>
    <div v-for="item in news" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNewsList()
      .then((res) => {
        this.news = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  },
};
</script>

<style scoped></style>
