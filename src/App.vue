<template>
  <div class="Home__Layout">
    <div class="Home__Container">
      <header class="Home__Header">Vue Calculator</header>
      <calc-result class="Home__Result" />
      <calc-input class="Home__Input" />
      <calc-history class="Home__History" @emitDelete="deleteItem" />
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