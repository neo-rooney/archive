<template>
  <div class="Home__Layout">
    <div class="Home__Container">
      <header class="Home__Header">Vue Calculator</header>
      <calc-result class="Home__Result" :propsdata="clickValue" />
      <calc-input class="Home__Input" @emitInputValue="inputValue" @emitResult="getResult" />
      <calc-history class="Home__History" :propsHistory="myHistory" @emitDelete="deleteItem" />
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
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.myHistory.push(localStorage.getItem(localStorage.key(i)));
      }
    }
  },
  data: function () {
    return {
      clickValue: "",
      myHistory: [],
    };
  },
  methods: {
    inputValue: function (value) {
      this.clickValue = value;
    },
    getResult: function (value) {
      localStorage.setItem(
        value.input + "=" + value.result,
        value.input + "=" + value.result
      );
      this.clickValue = value.result;
      this.myHistory.push(value.input + "=" + value.result);
    },
    deleteItem: function (value) {
      localStorage.removeItem(value.item);
      this.myHistory.splice(value.index, 1);
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