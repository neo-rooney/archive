# useScroll

> what is this ?

-   스크롤의 Y 좌표를 가져와서 특정 위치에 오면 지정한 이벤트가 발생하도록 하는 hook

> install

```bash
npm install @rooneyhooks/use-scroll
```

> Usage

```javascript
import useTitle from "@rooneyhooks/use-scroll";

export default function App() {
    const { y } = useScroll();
    return (
        <div className='App' style={{ height: "1000vh" }}>
            <h1 style={{ color: y > 1000 ? "red" : "blue", position: "fixed" }}>
                Scroll
            </h1>
        </div>
    );
}
```
