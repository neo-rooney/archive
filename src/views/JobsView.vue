<template>
  <div>
    <div v-for="item in jobs" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  //TODO:vue 라이프사이클 공부하기!
  created() {
    fetchJobsList()
      .then((res) => {
        this.jobs = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  },
};
</script>

<style scoped></style>
