import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default new Vuex.Store(store);
