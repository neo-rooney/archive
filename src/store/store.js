import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myInput: "",
    showModal: false,
    myHistory: [],
  },
  mutations: {
    onClickItem: function(state, payload) {
      state.myInput = state.myInput + payload;
    },
    getResult: function(state) {
      let input = state.myInput;
      if (input.indexOf("x") !== -1) {
        input = input.replace(/x/g, "*");
      }
      console.log("input", input);
      if (
        // 계산식의 첫글자가 사칙연산인 경우
        input[0] === "+" ||
        input[0] === "-" ||
        input[0] === "*" ||
        input[0] === "/"
      ) {
        console.log("1");
        state.showModal = true;
        return;
      } else if (
        // 계산식에 사칙연산이 없는 경우
        input.indexOf("+") === -1 &&
        input.indexOf("-") === -1 &&
        input.indexOf("*") === -1 &&
        input.indexOf("/") === -1
      ) {
        state.showModal = true;
        return;
      } else if (
        // 계산식이 사칙연산으로 끝나는 경우
        input[input.length - 1] === "+" ||
        input[input.length - 1] === "-" ||
        input[input.length - 1] === "*" ||
        input[input.length - 1] === "/"
      ) {
        console.log("3");
        state.showModal = true;
        return;
      }
      //localStorage에 계산기록 저장
      localStorage.setItem(
        state.myInput + "=" + eval(state.myInput),
        state.myInput + "=" + eval(state.myInput)
      );
      //myHistory state 속성에 계산 기록 저장
      state.myHistory.push(state.myInput + "=" + eval(state.myInput));
      state.myInput = eval(input);
    },
    onClickReset: function(state) {
      state.myInput = "";
    },
    onClickConfirm: function(state) {
      state.showModal = false;
    },
    onClickDelete: function(state, payload) {
      localStorage.removeItem(payload);
      const itemIndex = state.myHistory.indexOf(payload);
      state.myHistory.splice(itemIndex, 1);
    },
    setHistory: function(state, payload) {
      state.myHistory = payload;
    },
  },
  actions: {
    loadHistory: function(context) {
      setTimeout(() => {
        let items = [];
        if (localStorage.length > 0) {
          for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) !== "loglevel:webpack-dev-server")
              items.push(localStorage.getItem(localStorage.key(i)));
          }
        }
        context.commit("setHistory", items);
      }, 1000);
    },
  },
});
