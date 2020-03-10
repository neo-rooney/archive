# useInput

> what is this ?

-   Tab을 만들고 특정 Tab을 클릭 할 경우 그 Tab의 데이터를 화면에 랜더링 해주는 Hook
-   useTabs의 2 번째 매개변수에 배열(Array) 형태로 데이터를 넣어주어야 한다.
-   useTabs의 1 번째 매개변수에 초기 화면에 보여질 배열 형태의 데이터의 index값을 넣는다.

> install

```bash
npm install @rooneyhooks/use-input
```

> Usage

```javascript
import useTitle from "@rooneyhooks/use-input";

export default function App() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div className='App'>
            <h1>Hello</h1>
            {content.map((section, index) => (
                <button key={index} onClick={() => changeItem(index)}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}
```
