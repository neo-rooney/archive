export const state = () => ({
  me: null,
  following: [
    {
      id: 1,
      name: "rooney",
    },
    {
      id: 2,
      name: "Hun",
    },
    {
      id: 3,
      name: "young",
    },
  ],
  follower: [
    {
      id: 1,
      name: "rooney",
    },
    {
      id: 2,
      name: "Hun",
    },
    {
      id: 3,
      name: "young",
    },
  ],
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  addFollowing(state, payload) {
    const newArr = state.following.concat(payload);
    state.follwing = newArr;
  },
  removeFollowing(state, payload) {
    const newArr = state.following.filter((item) => item.id !== payload.id);
    state.following = newArr;
  },
  addFollower(state, payload) {
    const newArr = state.follower.concat(payload);
    state.follower = newArr;
  },
  removeFollower(state, payload) {
    const newArr = state.follower.filter((item) => item.id !== payload.id);
    state.follower = newArr;
  },
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
  addFollowing({ commit }, payload) {
    commit("addFollowing", payload);
  },
  removeFollowing({ commit }, payload) {
    commit("removeFollowing", payload);
  },
  addFollower({ commit }, payload) {
    commit("addFollower", payload);
  },
  removeFollower({ commit }, payload) {
    commit("removeFollower", payload);
  },
};
