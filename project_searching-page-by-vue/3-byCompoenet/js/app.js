import SearchModel from "./models/SearchModel.js";
import KeywordModel from "./models/KeywordModel.js";
import HistoryModel from "./models/HistoryModel.js";

import FormComponent from "./components/FormComponent.js";
import ResultComponent from "./components/ResultComponent.js";
import ListComponent from "./components/ListComponent.js";
import TapComponent from "./components/TabComponent.js";

//by Rooney, 새로운 Vue 인스턴스_200214
new Vue({
    //by Rooney,html의 어느부분에 마운팅 될것인지_200214
    el: "#app",
    //어떤 데이터를 표시 할 것인지
    data: {
        //by Rooney,index.html의 v-model='query'와 바인딩_200214
        query: "",
        submitted: false,
        tabs: ["추천 검색어", "최근 검색어"],
        selectedTab: "",
        searchResult: [],
        keywords: [],
        history: []
    },
    components: {
        "search-form": FormComponent,
        "search-result": ResultComponent,
        list: ListComponent,
        tabs: TapComponent
    },
    created() {
        this.selectedTab = this.tabs[0];
        this.fetchKeyword();
        this.fetchHistory();
    },
    methods: {
        //by Rooney,검색 폼에서 엔터를 누를 경우 동작하는 methods_200215
        onSubmit(query) {
            this.query = query;
            this.search();
        },
        onClickTab(tab) {
            this.selectedTab = tab;
        },
        onClickKeyword(keyword) {
            this.query = keyword;
            this.search();
        },
        onClickRemoveHistory(keyword) {
            HistoryModel.remove(keyword);
            this.fetchHistory();
        },
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data;
            });
        },
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.history = data;
            });
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true;
                this.searchResult = data;
            });
            HistoryModel.add(this.query);
            this.fetchHistory();
        },
        //by Rooney,검색 폼에서 x 버튼을 클릭한 경우 동작하는 methods_200215
        onReset(e) {
            this.resetForm();
        },
        resetForm(e) {
            this.query = "";
            this.submitted = false;
            this.searchResult = [];
        }
    }
});
