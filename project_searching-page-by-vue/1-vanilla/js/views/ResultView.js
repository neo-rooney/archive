import View from "./View.js";

const tag = "[ResultView]";

const ResultView = Object.create(View);

ResultView.messages = {
    NO_RESULT: "검색 결과가 없습니다"
};

ResultView.setup = function(el) {
    this.init(el);
};

//by Rooney, 데이터가 있는 경우 getSearchResultsHtml메서드 실행 / 없는 경우 NO_RESULT 프로퍼티출력_200214
ResultView.render = function(data = []) {
    console.log(tag, "render()", data);
    this.el.innerHTML = data.length
        ? this.getSearchResultsHtml(data)
        : this.messages.NO_RESULT;
    this.show();
};

//by Rooney, innerHTML에 들어갈 문자열(태그)생성_200214
ResultView.getSearchResultsHtml = function(data) {
    console.log(data);
    return (
        data.reduce((html, item) => {
            html += this.getSearchItemHtml(item);
            return html;
        }, "<ul>") + "</ul>"
    );
};

//by Rooney, innerHTML에 들어갈 문자열(태그)생성_200214
ResultView.getSearchItemHtml = function(item) {
    return `<li>
    <img src="${item.image}" />
    <p>${item.name}</p>
  </li>`;
};

export default ResultView;
