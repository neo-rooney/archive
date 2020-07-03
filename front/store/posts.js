export const state = () => ({
  contents: [],
  hasMoreContents: true,
  imagePaths: [],
});

const TOTAL_CONTENTS = 51;
const LIMIT = 10;

export const mutations = {
  //게시물
  loadContents(state, payload) {
    state.contents = state.contents.concat(payload);
    state.hasMoreContents = payload.length === LIMIT;
  },
  postContent(state, payload) {
    state.contents.unshift(payload);
    state.imagePaths = [];
  },
  deleteContent(state, payload) {
    const newArr = state.contents.filter((item) => item.id !== payload.id);
    state.contents = newArr;
  },
  concatImagePaths(state, payload) {
    state.imagePaths = state.imagePaths.concat(payload);
  },
  removeImagePath(state, payload) {
    state.imagePaths.splice(payload, 1);
  },
  //댓글
  loadComments(state, payload) {
    const index = state.contents.findIndex(
      (item) => item.id === payload.postId
    );
    state.contents[index].Commnets = payload;
  },
  postComment(state, payload) {
    const index = state.contents.findIndex(
      (item) => item.id === payload.postId
    );
    state.contents[index].Commnets.unshift(payload);
  },
};

export const actions = {
  postContent({ state, commit }, payload) {
    this.$axios
      .post(
        "http://localhost:3085/post",
        {
          content: payload.content,
          imagePaths: state.imagePaths,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        commit("postContent", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  deleteContent({ commit }, payload) {
    commit("deleteContent", payload);
  },
  postCommnet({ commit }, payload) {
    this.$axios
      .post(
        `http://localhost:3085/post/${payload.postId}/comment`,
        {
          content: payload.content,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        commit("postComment", res.data);
      })
      .catch(() => {});
  },

  loadContents({ commit, state }, payload) {
    if (state.hasMoreContents) {
      this.$axios
        .get(
          `http://localhost:3085/posts?offset=${state.contents.length}&limit=10`
        )
        .then((res) => {
          commit("loadContents", res.data);
        })
        .catch(() => {});
    }
  },

  loadComments({ commit, payload }) {
    this.$axios
      .get(`http://localhost:3085/post/${payload.postId}/comments`)
      .then((res) => {
        commit("loadComments", res.data);
      });
  },
  uploadImages({ commit }, payload) {
    this.$axios
      .post("http://localhost:3085/post/images", payload, {
        withCredentials: true,
      })
      .then((res) => {
        commit("concatImagePaths", res.data);
      })
      .catch(() => {});
  },
};
