<template>
  <div>
    <!-- HTML 코드는 여기! -->
    <my-header :propsdata="num" v-on:emitEvent="plusNum" />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  //Javascript 코드는 여기
  components: {
    "my-header": MyHeader,
  },
  data: function () {
    return {
      num: 10,
    };
  },
  methods: {
    plusNum: function () {
      this.num = this.num + 1;
    },
  },
};
</script>

<style scoped>
/* CSS코드느 여기 */
</style>