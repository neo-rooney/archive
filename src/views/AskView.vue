<template>
  <div>
    <p v-for="item in ask" :key="item.id">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
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
