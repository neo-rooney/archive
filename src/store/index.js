import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    newFeedList: [],
    newSort: "asc",
    onClickFilter: false
  },
  mutations: {
    SET_NEW_FEEDLIST(state, toggle) {
      state.newFeedList = toggle;
    },
    SET_NEW_SORT(state, toggle) {
      state.newSort = toggle;
    },
    CLICK_FILTER(state, toggle) {
      state.onClickFilter = toggle;
    }
  }
});

export default store;
