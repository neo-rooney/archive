<template>
  <div>
    <h1>{{propsdata}}</h1>
    <button v-on:click="onClickButton">더하기</button>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    onClickButton: function () {
      this.$emit("emitEvent");
    },
  },
};
</script>

<style scoped>
</style>