<template>
  <div>
    <CalcResult></CalcResult>
    <CalcInput></CalcInput>
    <CalcHistory></CalcHistory>
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
</style>