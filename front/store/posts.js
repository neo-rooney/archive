export const state = () => ({
  content: [],
});

export const mutations = {
  postContent(state, payload) {
    state.content.unshift(payload);
  },
  deleteContent(state, payload) {
    const newArr = state.content.filter((item) => item.id !== payload.id);
    state.content = newArr;
  },
  postComment(state, payload) {
    const index = state.content.findIndex(item => item.id === payload.postId)
    state.content[index].Commnets.unshift(payload)
  }
};

export const actions = {
  postContent({ commit }, payload) {
    commit("postContent", payload);
  },
  deleteContent({ commit }, payload) {
    commit("deleteContent", payload);
  },
  postCommnet({ commit }, payload) {
    commit("postComment", payload)
  }
};
