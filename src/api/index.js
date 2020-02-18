import axios from "axios";
import qs from "qs";

const DOMAIN =
  "https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production";
const FAIL = 500;

const request = (method, url, params) => {
  return axios({
    method,
    url: DOMAIN + url,
    params: params,
    paramsSerializer: params => {
      return qs.stringify(params);
    }
  })
    .then(result => result.data)
    .catch(result => {
      const { status } = result.response;
      if (status === FAIL) {
        ("url, params를 다시 확인 하십시오");
      } else {
        throw Error(result);
      }
    });
};

export const fetchFeed = {
  fetch(params) {
    return request("GET", "/api/list", params);
  }
};

export const fetchSpon = {
  fetch(params) {
    return request("GET", "/api/ads", params);
  }
};

export const filterList = {
  fetch() {
    return request("get", "/api/category");
  }
};

export const fetchFeedDetail = {
  fetch(params) {
    return request("GET", "/api/view", params);
  }
};
