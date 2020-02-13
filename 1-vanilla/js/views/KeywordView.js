import View from "./View.js";

const tag = "[KeywordView]";

//by Rooney, View 객체 참조_200214
const KeywordView = Object.create(View);

//by Rooney, 초기화_200214
KeywordView.setup = function(el) {
    this.init(el);
    return this;
};

KeywordView.messages = {
    NO_KEYWORDS: "추천 검색어가 없습니다."
};

//by Rooney, 데이터를 받으면 getKeywordsHtml메서드 실행_200214
KeywordView.render = function(data = []) {
    this.el.innerHTML = data.length
        ? this.getKeywordsHtml(data)
        : this.messages.NO_KEYWORDS;
    this.show();
    this.bindeClickEvent();
    return this;
};

//by Rooney, 받은 데이터로 innerHTML 안에 들어갈 문자열 생성/클릭한 요소의 value dataset으로 전달_200214
KeywordView.getKeywordsHtml = function(data) {
    return (
        data.reduce((html, item, index) => {
            html += `<li data-keyword="${item.keyword}">
        <span class="number">${index + 1}<span>
        ${item.keyword}
        </li>`;
            return html;
        }, '<ul class="list">') + "</ul>"
    );
};
//by Rooney, 각 li마다 이벤트 생성 _200214
KeywordView.bindeClickEvent = function() {
    Array.from(this.el.querySelectorAll("li")).forEach(li => {
        li.addEventListener("click", e => this.onClickKeyword(e));
    });
};

//by Rooney, 각 li마다 이벤트 생성 / @click이벤트 생성 _200214
KeywordView.onClickKeyword = function(e) {
    const { keyword } = e.currentTarget.dataset;
    this.emit("@click", { keyword });
};

export default KeywordView;
