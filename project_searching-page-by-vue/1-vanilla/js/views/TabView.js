import View from "./View.js";

const tag = "[TabView]";

//by Rooney, View 객체 참조_200214
const TabView = Object.create(View);

//by Rooney, 초기화/ 이벤트 바인딩_200214
TabView.setup = function(el) {
    this.init(el);
    this.bindClick();
    return this;
};

//by Rooney, 텝 네임이 같을 경우 클래스 추가_200214
TabView.setActiveTab = function(tabName) {
    Array.from(this.el.querySelectorAll("li")).forEach(li => {
        li.className = li.innerHTML === tabName ? "active" : "";
    });
};

//by Rooney, 모든 li에 대하여 click 이벤트 리스너_200214
TabView.bindClick = function() {
    Array.from(this.el.querySelectorAll("li")).forEach(li => {
        li.addEventListener("click", e => this.onClick(li.innerHTML));
    });
};

//by Rooney, 클릭할 경우 setActiveTab 메서드 실행 / @change이벤트 생성_200214
TabView.onClick = function(tabName) {
    this.setActiveTab(tabName);
    this.emit("@change", { tabName });
};

export default TabView;
