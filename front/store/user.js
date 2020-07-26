export const state = () => ({
  me: null,
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
};

export const actions = {
  signUp({ commit }, payload) {
    console.log("payload")
    try {
      commit("setMe", payload);
    } catch (error) {
      console.error(error);
    }
  },
};
