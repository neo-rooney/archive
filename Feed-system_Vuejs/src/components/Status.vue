<template>
  <div class="status-bar">
    <div class="sort">
      <ul>
        <li
          class="sort__list"
          v-for="(sort, index) in sorts"
          :key="index"
          v-bind:class="{ active: sort === selectedSort }"
          @click="onClickSort(sort)"
        >
          <span
            class="list__dot"
            v-bind:class="{ active: sort === selectedSort }"
            >•</span
          >
          <span class="list__text" v-if="sort === sorts[0]">오름차순</span>
          <span class="list__text" v-else>내림차순</span>
        </li>
      </ul>
    </div>
    <div class="filter">
      <a href @click.prevent="onClickFilter">
        <div>필터</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sorts: ["asc", "desc"],
      selectedSort: ""
    };
  },
  created() {
    this.selectedSort = this.sorts[0];
  },
  methods: {
    onClickSort(sort) {
      this.selectedSort = sort;
      this.$store.commit("SET_NEW_SORT", sort);
    },
    onClickFilter() {
      this.$store.commit("CLICK_FILTER", true);
    }
  }
};
</script>

<style scoped>
.status-bar {
  width: 865px;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.sort ul {
  display: flex;
}

.sort__list {
  color: #adb5bd;
  cursor: pointer;
}

.list__dot {
  font-size: 22px;
}

.list__text {
  font-size: 13px;
}
.list__text:nth-child(2) {
  margin-right: 10px;
}

.sort__list.active {
  color: #495057;
}

.list__dot.active {
  color: #00c854;
}

.filter {
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px #e1e4e7;
}

.filter a {
  width: 48px;
  height: 24px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter div {
  width: 26px;
  height: 19px;
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
}
@media screen and (max-width: 600px) {
  .status-bar {
    width: 375px;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  .sort__list {
    margin-left: 15px;
  }
  .filter {
    margin-right: 15px;
  }
}
</style>
