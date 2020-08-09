<template>
  <div class="Home__Layout">
    <div class="Home__Container">
      <header class="Home__Header">Vue Calculator</header>
      <calc-result class="Home__Result" :propsdata="clickValue" />
      <calc-input class="Home__Input" @emitInputValue="inputValue" />
      <calc-history class="Home__History" />
    </div>
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
  data: function () {
    return {
      clickValue: "",
    };
  },
  methods: {
    inputValue: function (value) {
      this.clickValue = value;
      console.log("clickValue", this.clickValue);
    },
  },
};
</script>

<style scoped>
.Home__Layout {
  display: flex;
  justify-content: center;
}

.Home__Container {
  max-width: 360px;
  height: 100vh;
}

.Home__Header {
  font-size: 50px;
  font-weight: 800;
  text-align: center;
}
</style>