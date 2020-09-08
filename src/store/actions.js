import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then((res) => {
        commit("SET_NEWS", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then((res) => {
        commit("SET_JOBS", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then((res) => {
        commit("SET_ASK", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then((res) => {
        commit("SET_USER", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId)
      .then((res) => {
        commit("SET_ITEM", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
};
