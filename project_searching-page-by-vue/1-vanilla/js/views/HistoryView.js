import KeywordView from "./KeywordView.js";

const tag = "[HistoryView]";

//by Rooney, View 객체 참조_200214
const HistoryView = Object.create(KeywordView);

HistoryView.messages.NO_KEYWORDS = "검색 이력이 없습니다";

//by Rooney, getKeywordsHtml overWriting_200214
HistoryView.getKeywordsHtml = function(data) {
    return (
        data.reduce((html, item) => {
            html += `<li data-keyword="${item.keyword}">
            ${item.keyword}
            <span class="date">${item.date}</span>
            <button class="btn-remove"></button>
        </li>`;
            return html;
        }, "<ul class=list>") + "</ul>"
    );
};

//by Rooney, x 버튼을 누르면 검색기록에서 삭제되는 이벤트_200214
HistoryView.bindRemoveBtn = function() {
    Array.from(this.el.querySelectorAll("button.btn-remove")).forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            this.onRemove(btn.parentElement.dataset.keyword);
        });
    });
};

//by Rooney, @remove 이벤트 _200214
HistoryView.onRemove = function(keyword) {
    this.emit("@remove", { keyword });
};

export default HistoryView;
