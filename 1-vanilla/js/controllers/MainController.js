import FormView from "../views/FormView.js";

const tag = "[MainController]";

export default {
    //by Rooney, form 초기화_200213
    //by Rooney, @submit 이벤트 리슨_200213
    //by Rooney, @reset 이벤트 리슨_200213
    init() {
        console.log(tag, "init()");
        FormView.setup(document.querySelector("form"))
            .on("@submit", e => this.onSubmit(e.detail.input))
            .on("@reset", e => this.onResetForm());
    },

    onSubmit(input) {
        console.log(tag, "onSubmit()", input);
        //todo: 검색 결과 출력
    },

    onResetForm() {
        console.log(tag, "onResetForm()");
        //todo: 검색 결과 삭제
    }
};
