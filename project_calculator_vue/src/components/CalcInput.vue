<template>
  <div>
    <table>
      <tr>
        <td colspan="3" @click="onClickReset">초기화</td>
        <td @click="e => onClickItem(e.target.innerHTML)" class="Operator">/</td>
      </tr>
      <tr>
        <td @click="e => onClickItem(e.target.innerHTML)">7</td>
        <td @click="e => onClickItem(e.target.innerHTML)">8</td>
        <td @click="e => onClickItem(e.target.innerHTML)">9</td>
        <td @click="e => onClickItem(e.target.innerHTML)" class="Operator">x</td>
      </tr>
      <tr>
        <td @click="e => onClickItem(e.target.innerHTML)">4</td>
        <td @click="e => onClickItem(e.target.innerHTML)">5</td>
        <td @click="e => onClickItem(e.target.innerHTML)">6</td>
        <td @click="e => onClickItem(e.target.innerHTML)" class="Operator">-</td>
      </tr>
      <tr>
        <td @click="e => onClickItem(e.target.innerHTML)">1</td>
        <td @click="e => onClickItem(e.target.innerHTML)">2</td>
        <td @click="e => onClickItem(e.target.innerHTML)">3</td>
        <td @click="e => onClickItem(e.target.innerHTML)" class="Operator">+</td>
      </tr>
      <tr>
        <td colspan="2" @click="e => onClickItem(e.target.innerHTML)">0</td>
        <td @click="e => onClickItem(e.target.innerHTML)">.</td>
        <td @click="getResult" class="Operator">=</td>
      </tr>
    </table>
    <modal v-if="this.$store.state.input.showModal">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">알림</h3>
      <div slot="body">잘못된 계산식입니다.</div>
      <div slot="footer">
        <button @click="onClickConfirm">확인</button>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
import { mapMutations, mapActions } from "vuex";
export default {
  components: {
    Modal: Modal,
  },
  methods: {
    ...mapMutations(["onClickReset", "onClickItem", "onClickConfirm"]),
    ...mapActions(["getResult"]),
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid #000000;
  border-collapse: collapse;
  background-color: #7f8082;
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
}

td {
  width: 25%;
  height: 50px;
  border: 1px solid #5d5e60;
  text-align: center;
}

.Operator {
  background-color: #fd9f0b;
}
</style>