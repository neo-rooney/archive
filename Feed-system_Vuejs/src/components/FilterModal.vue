<template>
  <Modal class="modal">
    <div class="header" slot="header">
      <a href class="modal_exitBtn" @click.prevent="CLICK_FILTER(false)"
        >&times;</a
      >
      <div>필터</div>
    </div>
    <div slot="body">
      <ul>
        <li v-for="(item, index) in category" :key="item.id">
          <input
            type="checkbox"
            id="item.id"
            value="item.name"
            v-model="checkedCategory[index]"
          />
          <label for="item.id">{{ item.name }}</label>
        </li>
      </ul>
    </div>
    <div slot="footer">
      <button
        @click.prevent="save"
        class="btn"
        type="submit"
        form="add-board-form"
      >
        저장하기
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import { filterList } from "../api";
import { mapMutations } from "vuex";

export default {
  components: {
    Modal
  },
  props: ["value"],
  data() {
    return {
      category: [],
      checkedNames: [],
      checkedCategory: [],
      dataLength: 0
    };
  },
  created() {
    this.fetchData();
    this.checkedCategory = this.value;
  },
  methods: {
    ...mapMutations(["CLICK_FILTER"]),
    fetchData() {
      filterList.fetch().then(data => {
        this.category = data.list;
        this.dataLength = this.category.length;
        this.noticeDataLength();
      });
    },
    save() {
      this.CLICK_FILTER(false);
      this.$emit("save", this.checkedCategory);
    },
    noticeDataLength() {
      this.$emit("notice", this.dataLength);
    }
  }
};
</script>

<style scoped>
.modal_exitBtn {
  text-decoration: none;
  color: #c6c4c4;
  font-size: 30px;
  position: relative;
  left: 450px;
  bottom: 10px;
}
.header div {
  width: 100px;
  height: 33px;
  font-family: SpoqaHanSans;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: left;
  color: #212529;
}

label {
  width: 117px;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}

button {
  width: 99px;
  height: 40px;
  border-radius: 3px;
  background-color: #00c854;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
  position: relative;
  left: 350px;
  top: 20px;
}

@media screen and (max-width: 600px) {
  .modal_exitBtn {
    left: 320px;
    bottom: 10px;
  }
  button {
    width: 277px;
    height: 40px;
    border-radius: 3px;
    position: relative;
    left: 30px;
  }
}
</style>
