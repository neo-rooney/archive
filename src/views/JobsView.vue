<template>
  <div>
    <p v-for="item in this.$store.state.jobs" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small> {{item.time_ago}} by {{item.domain}}</small>
    </p>
  </div>
</template>

<script>
export default {
  //TODO:vue 라이프사이클 공부하기!
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style scoped></style>
