<template>
  <div>
    <div v-for="item in ask" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["ask"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style scoped></style>
