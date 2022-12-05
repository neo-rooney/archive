export const state = () => ({
  me: null,
  followings: [],
  followers: [],
  hasMoreFollowers: true,
  hasMoreFollowings: true,
});

const TOTAL_FOLLOWERS = 12;
const TOTAL_FOLLOWINGS = 14;
const LIMIT = 3;

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  addFollowing(state, payload) {
    const newArr = state.followings.concat(payload);
    state.follwings = newArr;
  },
  removeFollowing(state, payload) {
    const newArr = state.followings.filter((item) => item.id !== payload.id);
    state.followings = newArr;
  },
  addFollower(state, payload) {
    const newArr = state.followers.concat(payload);
    state.followers = newArr;
  },
  removeFollower(state, payload) {
    const newArr = state.followers.filter((item) => item.id !== payload.id);
    state.followers = newArr;
  },
  loadFollowings(state) {
    const DIFF = TOTAL_FOLLOWINGS - state.followings.length;
    const fakeUsers = Array(DIFF > LIMIT ? LIMIT : DIFF)
      .fill()
      .map((item) => ({
        id: Math.random().toString(),
        name: Math.floor(Math.random() * 1000),
      }));
    state.followings = state.followings.concat(fakeUsers);
    state.hasMoreFollowings = LIMIT === fakeUsers.length;
  },
  loadFollowers(state) {
    const DIFF = TOTAL_FOLLOWERS - state.followers.length;
    const fakeUsers = Array(DIFF > LIMIT ? LIMIT : DIFF)
      .fill()
      .map((item) => ({
        id: Math.random().toString(),
        name: Math.floor(Math.random() * 1000),
      }));
    state.followers = state.followers.concat(fakeUsers);
    state.hasMoreFollowers = LIMIT === fakeUsers.length;
  },
  resetFollowings(state) {
    state.followings = [];
  },
  resetFollowers(state) {
    state.followers = [];
  },
};

export const actions = {
  async loadUser({ commit }) {
    try {
      const { data } = await this.$axios.get("/user", {
        withCredentials: true,
      });
      commit("setMe", data);
    } catch (err) {
      console.error(err);
    }
  },
  signUp({ commit }, payload) {
    this.$axios
      .post(
        "/user",
        {
          email: payload.email,
          nickname: payload.nickname,
          password: payload.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        console.log("data>>>", data);
        commit("setMe", payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  logIn({ commit }, payload) {
    this.$axios
      .post(
        "/user/login",
        {
          email: payload.email,
          password: payload.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        commit("setMe", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  logOut({ commit }) {
    this.$axios
      .post(
        "/user/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        commit("setMe", null);
      })
      .catch((err) => {
        console.error(err);
      });
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
  loadFollowings({ state, commit }) {
    if (state.hasMoreFollowings) {
      commit("loadFollowings");
    }
  },
  loadFollowers({ state, commit }) {
    if (state.hasMoreFollowers) {
      commit("loadFollowers");
    }
  },
};
