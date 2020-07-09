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
    const newArr = state.contents.filter((item) => item.id !== payload.postId);
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
    state.contents = state.contents.map((item) =>
      item.id === payload.postId ? { ...item, Comments: payload.data } : item
    );
    a;
  },
  postComment(state, payload) {
    console.log(payload);
    const index = state.contents.findIndex(
      (item) => item.id === payload.PostId
    );
    console.log("index", index);
    state.contents[index].Comments.unshift(payload);
  },
};

export const actions = {
  postContent({ state, commit }, payload) {
    this.$axios
      .post(
        "http://localhost:3085/post",
        {
          content: payload.content,
          image: state.imagePaths,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        commit("postContent", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  async deleteContent({ commit }, payload) {
    try {
      const { data } = await this.$axios.delete(`/post/${payload.postId}/`, {
        withCredentials: true,
      });
      if (data.success) {
        commit("deleteContent", payload);
      }
    } catch (err) {
      console.error(err);
    }
  },
  async postCommnet({ commit }, payload) {
    try {
      const { data } = await this.$axios.post(
        `/post/${payload.postId}/comment`,
        {
          content: payload.content,
        },
        {
          withCredentials: true,
        }
      );
      commit("postComment", data);
    } catch (err) {
      console.error(err);
    }
  },

  async loadContents({ commit, state }, payload) {
    if (state.hasMoreContents) {
      try {
        const { data } = await this.$axios.get(
          `/posts?offset=${state.contents.length}&limit=10`
        );
        commit("loadContents", data);
      } catch (err) {
        console.error(err);
      }
    }
  },

  async loadComments({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(
        `/post/${payload.postId}/comments`
      );
      commit("loadComments", {
        postId: payload.postId,
        data,
      });
    } catch (err) {
      console.error(err);
    }
  },
  uploadImages({ commit }, payload) {
    this.$axios
      .post("/post/images", payload, {
        withCredentials: true,
      })
      .then((res) => {
        commit("concatImagePaths", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
