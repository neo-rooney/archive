export default {
  getResult: function({ state, rootState }) {
    let input = state.myInput;
    if (input.indexOf("x") !== -1) {
      input = input.replace(/x/g, "*");
    }
    if (
      // 계산식의 첫글자가 사칙연산인 경우
      input[0] === "+" ||
      input[0] === "-" ||
      input[0] === "*" ||
      input[0] === "/"
    ) {
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
      state.showModal = true;
      return;
    }
    //localStorage에 계산기록 저장
    localStorage.setItem(
      state.myInput + "=" + eval(state.myInput),
      state.myInput + "=" + eval(state.myInput)
    );
    //myHistory state 속성에 계산 기록 저장
    rootState.myHistory.push(state.myInput + "=" + eval(state.myInput));
    state.myInput = `${eval(input)}`;
  },
};
