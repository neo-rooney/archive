<template>
  <div class="Home__Container">
    <calc-result class="Home__Result" />
    <calc-input class="Home__Input" />
    <calc-history class="Home__History" />
  </div>
</template>

<script>
import CalcResult from "./components/CalcResult.vue";
import CalcInput from "./components/CalcInput.vue";
import CalcHistory from "./components/CalcHistory.vue";

export default {
  components: {
    CalcResult,
    CalcInput,
    CalcHistory,
  },
};
</script>

<style scoped>
.Home__Container {
  padding: 20px;
}
.Home__Result {
  margin-bottom: 10px;
}
</style>