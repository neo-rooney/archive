export const state = () => ({
  me: {
    email: "bch3454@naver.com",
    nickname:"rooney"
  },
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  }
};

export const actions = {
  signUp({ commit }, payload) {
    commit("setMe", payload);
  },
  logIn({ commit }, payload) {
    commit("setMe", payload);
  },
  logOut({ commit }, payload) {
    commit("setMe", null);
  },
  changeNickname({ commit }, payload) {
    commit("setMe", payload);
  },
};
