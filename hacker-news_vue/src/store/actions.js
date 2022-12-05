import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    return fetchNewsList()
      .then((res) => {
        commit("SET_NEWS", res.data);
        return res;
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then((res) => {
        commit("SET_JOBS", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then((res) => {
        commit("SET_ASK", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then((res) => {
        commit("SET_USER", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItemInfo(itemId)
      .then((res) => {
        commit("SET_ITEM", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
};
