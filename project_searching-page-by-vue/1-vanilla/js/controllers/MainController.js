import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import TabView from "../views/TabView.js";
import KeywordView from "../views/KeywordView.js";
import HistoryView from "../views/HistoryView.js";

import SearchModel from "../models/SearchModel.js";
import KeywordModel from "../models/KeywordModel.js";
import HistoryModel from "../models/HistoryModel.js";

const tag = "[MainController]";

export default {
    //by Rooney, FormView 초기화_200213
    //by Rooney, @submit 이벤트 리슨_200213
    //by Rooney, @reset 이벤트 리슨_200213
    //by Rooney, ResultView 초기화_200214
    //by Rooney, @change 이벤트 리슨_200214
    //by Rooney, KeywordView 초기화_200214
    //by Rooney, @click 이벤트 리슨_200214
    //by Rooney, HistoryView 초기화_200214
    //by Rooney, @remove 이벤트 리슨_200214
    init() {
        console.log(tag, "init()");
        FormView.setup(document.querySelector("form"))
            .on("@submit", e => this.onSubmit(e.detail.input))
            .on("@reset", e => this.onResetForm());

        TabView.setup(document.querySelector("#tabs")).on("@change", e =>
            this.onChangeTab(e.detail.tabName)
        );

        KeywordView.setup(
            document.querySelector("#search-keyword")
        ).on("@click", e => this.onClickKeyword(e.detail.keyword));

        ResultView.setup(document.querySelector("#search-result"));

        HistoryView.setup(document.querySelector("#search-history"))
            .on("@click", e => this.onClickHistory(e.detail.keyword))
            .on("@remove", e => this.onRemoveHistory(e.detail.keyword));

        this.selectedTab = "최근 검색어";
        this.renderView();
    },

    //by Rooney, 초기화면/추천 검색어 선택/검색 결과 숨기기_200214
    renderView() {
        console.log(tag, "renderView()");
        TabView.setActiveTab(this.selectedTab);

        if (this.selectedTab === "추천 검색어") {
            this.fetchSearchKeyword();
            HistoryView.hide();
        } else {
            this.fetchSearchHistory();
            KeywordView.hide();
        }
        TabView.show();
        ResultView.hide();
    },

    fetchSearchKeyword() {
        KeywordModel.list().then(data => {
            KeywordView.render(data);
        });
    },

    fetchSearchHistory() {
        console.log(this);
        HistoryModel.list().then(data => {
            HistoryView.render(data).bindRemoveBtn();
        });
    },

    //by Rooney, Searchmodel로부터 데이터를 받아오기/onSearchResult메서드 실행_200214
    //by Rooney, setValue 메서드 실행_200214
    //by Rooney, 검색기록 최근 검색어에 추가(add 메서드 실행)_200214
    search(query) {
        FormView.setValue(query);
        HistoryModel.add(query);
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
        this.renderView();
    },

    //by Rooney, 받아온 데이터를 화면에 표시하기 위해 ResultView.render 메서드 실행 _200214
    onSearchResult(data) {
        TabView.hide();
        KeywordView.hide();
        HistoryView.hide();
        ResultView.render(data);
    },

    //by Rooney, 추천 검색어, 최근 검색어 스위칭 _200214
    onChangeTab(tabName) {
        this.selectedTab = tabName;
        this.renderView();
    },

    //@click 이벤트 발생시 search 메서드 실행_200214
    onClickKeyword(keyword) {
        this.search(keyword);
    },

    //@click 이벤트 발생시 search 메서드 실행_200214
    onClickHistory(keyword) {
        this.search(keyword);
    },

    //@remove 이벤트 발생시 remove 메서드 실행_200214
    onRemoveHistory(keyword) {
        HistoryModel.remove(keyword);
        this.renderView();
    }
};
