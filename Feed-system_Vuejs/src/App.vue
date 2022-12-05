<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <FilterModal
      v-if="onClickFilter"
      @save="saveFilter"
      @notice="settingFilter"
      v-bind:value="saveFilterList"
    />
    <Observer v-on:intersect="fetchFeedData" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Observer from "./components/Observer.vue";
import FilterModal from "./components/FilterModal.vue";
import { fetchFeed, fetchSpon } from "./api";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    Navbar,
    Observer,
    FilterModal
  },
  data() {
    return {
      feedData: [],
      newFeedData: [],
      feedPage: 1,
      feedOrd: "asc",
      feedCategory: [3, 2, 1],
      feedLimit: 10,
      isFilter: false,
      saveFilterList: [],
      isSetting: true,
      newCategory: []
    };
  },
  computed: {
    ...mapState(["newSort", "onClickFilter"])
  },
  watch: {
    newSort() {
      this.newFeedData = [];
      this.feedData = [];
      this.$store.commit("SET_NEW_FEEDLIST", []);
      this.feedPage = 1;
    }
  },
  created() {
    console.log(this.newFeedData);
  },
  methods: {
    fetchFeedData() {
      fetchFeed
        .fetch({
          page: this.feedPage,
          ord: this.newSort,
          category: this.feedCategory,
          limit: this.feedLimit
        })
        .then(data => {
          this.feedData = data.list.data;
          this.feedPage += 1;
          this.newFeedData = this.newFeedData.concat(data.list.data);
          this.$store.commit("SET_NEW_FEEDLIST", this.newFeedData);
        });
    },
    saveFilter(checked) {
      this.saveFilterList = checked;
      console.log(this.saveFilterList);
      for (let i = 0; i < 3; i++) {
        if (this.saveFilterList[i] === true) {
          this.newCategory.push(i + 1);
        }
      }
      this.feedCategory = this.newCategory;
      this.newCategory = [];

      this.newFeedData = [];
      this.feedData = [];
      this.$store.commit("SET_NEW_FEEDLIST", []);
      this.feedPage = 1;
    },
    settingFilter(length) {
      if (this.isSetting) {
        for (let i = 0; i < length; i++) {
          this.saveFilterList[i] = true;
        }
        this.isSetting = false;
      }
    }
  }
};
</script>

<style></style>
