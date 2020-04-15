export const state = () => ({
  content: [],
});

export const mutations = {
  postContent(state, payload) {
    state.content.unshift(payload);
  },
  deleteContent(state, payload) {
    const newArr = state.content.filter((item) => item.id !== payload.id);
    console.log("newArr >>>", newArr);
    state.content = newArr;
  },
};

export const actions = {
  postContent({ commit }, payload) {
    commit("postContent", payload);
  },
  deleteContent({ commit }, payload) {
    commit("deleteContent", payload);
  },
};
