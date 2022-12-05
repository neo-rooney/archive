<template>
  <table>
    <tr>
      <td colspan="3" @click="onClickItem">초기화</td>
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
      <td @click="onClickItem">=</td>
    </tr>
  </table>
</template>

<script>
export default {
  methods: {
    onClickItem: function (e) {
      console.log(e.target.innerHTML);
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