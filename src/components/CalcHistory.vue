<template>
  <div>
    <div v-for="(item, index) in myHistory" :key="index" class="CalcHistoy__Item">{{item}}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      myHistory: [],
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.myHistory.push(localStorage.getItem(localStorage.key(i)));
      }
    }
  },
};
</script>

<style scoped>
.CalcHistoy__Item {
  width: 100%;
  height: 30;
  background-color: #7f8082;
  margin-top: 10px;
  padding: 5px;
  color: #ffffff;
  font-weight: 700;
  box-sizing: border-box;
  letter-spacing: 10px;
  text-align: center;
}
</style>