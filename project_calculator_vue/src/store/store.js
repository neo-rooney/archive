import Vue from "vue";
import Vuex from "vuex";
import input from "./modules/input";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myHistory: [],
  },
  mutations: {
    setHistory: function(state, payload) {
      state.myHistory = payload;
    },
  },
  actions: {
    loadHistory: function(context) {
      setTimeout(() => {
        let items = [];
        if (localStorage.length > 0) {
          for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) !== "loglevel:webpack-dev-server")
              items.push(localStorage.getItem(localStorage.key(i)));
          }
        }
        context.commit("setHistory", items);
      }, 1000);
    },
  },
  modules: {
    input,
  },
});
