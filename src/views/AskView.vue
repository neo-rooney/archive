<template>
  <div>
    <div v-for="item in ask" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((res) => {
        this.ask = res.data;
      })
      .catch((e) => {
        console.error(e);
      });
  },
};
</script>

<style scoped></style>
