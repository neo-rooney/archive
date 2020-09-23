<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{item.time_ago}} by
        <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import bus from "../utils/bus.js";
export default {
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_NEWS")
      .then(() => {
        bus.$emit("end:spinner");
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style scoped></style>
