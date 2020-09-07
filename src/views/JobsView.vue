<template>
  <div>
    <div v-for="item in this.$store.state.jobs" :key="item.id">{{ item.title }}</div>
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
