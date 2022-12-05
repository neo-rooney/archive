import ListView from "./Listvue.vue";

export default function createListView(name) {
  return {
    name: name,
    // 재사용할 컴포넌트 인스턴스 옵션들
    render(createElement) {
      return createElement(ListView);
    },
  };
}
