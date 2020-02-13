import View from "./View.js";

const tag = "[FormView]";

//by Rooney, View 객체 참조_200213
const FormView = Object.create(View);

//by Rooney, 초기화/x버튼 숨김/글자 입력시 x 버튼 보임_200213
FormView.setup = function(el) {
    this.init(el);
    this.inputEl = el.querySelector("[type=text]");
    this.resetEl = el.querySelector("[type=reset]");
    this.showResetBtn(false);
    this.bindEvents();
    return this;
};

//by Rooney, show가 true 인 경우에만 함수 실행_200213
FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display = show ? "block" : "none";
};

//by Rooney, 이벤트 바인딩_200213
FormView.bindEvents = function() {
    this.on("submit", e => e.preventDefault());
    this.inputEl.addEventListener("keyup", e => this.onKeyup(e));
    this.resetEl.addEventListener("click", e => this.onClickReset(e));
};

//by Rooney, key입력시 x 버튼 보이게_200213
//by Rooney, 엔터 입력시 이벤트 생성_200213
//by Rooney, input창 비운 경우 이벤트 생성_200213
FormView.onKeyup = function(e) {
    //엔터눌렀을 때 keyCode는 13으로 정해져있다.
    const enter = 13;
    this.showResetBtn(this.inputEl.value.length);
    if (!this.inputEl.value.length) {
        this.emit("@reset");
    }
    if (e.keyCode !== enter) {
        return;
    } else {
        this.emit("@submit", { input: this.inputEl.value });
    }
};

//by Rooney, x버튼 클릭시 이벤트 생성_200213
FormView.onClickReset = function(e) {
    this.emit("@reset");
    this.showResetBtn(false);
};

//by Rooney, @click 이벤트가 발생한 요소를 검색창의 value로 입력_200214
//by Rooney, value가 입력되면 showResetBtn 메서드 실행_200214
FormView.setValue = function(value = "") {
    this.inputEl.value = value;
    this.showResetBtn(this.inputEl.value.length);
};

export default FormView;
