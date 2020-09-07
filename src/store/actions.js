import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index.js";

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
};
