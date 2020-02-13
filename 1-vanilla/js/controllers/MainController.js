import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import TabView from "../views/TabView.js";

import SearchModel from "../models/SearchModel.js";

const tag = "[MainController]";

export default {
    //by Rooney, FormView 초기화_200213
    //by Rooney, @submit 이벤트 리슨_200213
    //by Rooney, @reset 이벤트 리슨_200213
    //by Rooney, ResultView 초기화_200214
    //by Rooney, @change 이벤트 리슨_200214
    init() {
        console.log(tag, "init()");
        FormView.setup(document.querySelector("form"))
            .on("@submit", e => this.onSubmit(e.detail.input))
            .on("@reset", e => this.onResetForm());

        TabView.setup(document.querySelector("#tabs")).on("@change", e =>
            this.onChangeTab(e.detail.tabName)
        );

        ResultView.setup(document.querySelector("#search-result"));

        this.selectedTab = "추천 검색어";
        this.renderView();
    },

    //by Rooney, 초기화면/추천 검색어 선택/검색 결과 숨기기_200214
    renderView() {
        console.log(tag, "renderView()");
        TabView.setActiveTab(this.selectedTab);
        ResultView.hide();
    },

    //by Rooney, Searchmodel로부터 데이터를 받아오기/onSearchResult메서드 실행_200214
    search(query) {
        console.log(tag, "search()", query);
        SearchModel.list(query).then(data => {
            this.onSearchResult(data);
        });
    },
    //by Rooney, @submit 이벤트 발생시 search메서드 실행_200214
    onSubmit(input) {
        console.log(tag, "onSubmit()", input);
        this.search(input);
    },

    //by Rooney, @reset 이벤트 발생시 검색결과 사라짐_200214
    onResetForm() {
        console.log(tag, "onResetForm()");
        ResultView.hide();
    },
    //by Rooney, 받아온 데이터를 화면에 표시하기 위해 ResultView.render 메서드 실행 _200214
    onSearchResult(data) {
        ResultView.render(data);
    },

    onChangeTab(tabName) {
        debugger;
    }
};
