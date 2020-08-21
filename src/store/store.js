import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myInput: "",
  },
  mutations: {
    onClickItem: function(state, payload) {
      state.myInput = state.myInput + payload;
    },
  },
});
