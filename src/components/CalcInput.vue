<template>
  <table>
    <tr>
      <td colspan="3" @click="onClickReset">초기화</td>
      <td @click="onClickItem">/</td>
    </tr>
    <tr>
      <td @click="onClickItem">7</td>
      <td @click="onClickItem">8</td>
      <td @click="onClickItem">9</td>
      <td @click="onClickItem">x</td>
    </tr>
    <tr>
      <td @click="onClickItem">4</td>
      <td @click="onClickItem">5</td>
      <td @click="onClickItem">6</td>
      <td @click="onClickItem">-</td>
    </tr>
    <tr>
      <td @click="onClickItem">1</td>
      <td @click="onClickItem">2</td>
      <td @click="onClickItem">3</td>
      <td @click="onClickItem">+</td>
    </tr>
    <tr>
      <td colspan="2" @click="onClickItem">0</td>
      <td @click="onClickItem">.</td>
      <td @click="getResutl">=</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      myInput: "",
      myResult: "",
    };
  },
  methods: {
    onClickItem: function (e) {
      this.myInput = this.myInput + e.target.innerHTML;
      console.log(this.myInput);
    },
    getResutl: function () {
      let input = this.myInput;
      if (input.indexOf("x") !== -1) {
        input = input.replace(/x/g, "*");
      }
      this.myResult = eval(input);
      console.log(this.myResult);
    },
    onClickReset: function () {
      this.myInput = "";
      this.myResult = "";
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid #000000;
  border-collapse: collapse;
}

td {
  width: 25%;
  height: 50px;
  border: 1px solid #000000;
  text-align: center;
}
</style>