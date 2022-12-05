<template>
  <div>
    <h1 v-if="isShow">로딩중...</h1>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
</style>