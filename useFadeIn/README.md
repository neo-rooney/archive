# useFadeIn

> what is this ?

-   특정 DOM을 선택하여 Fade-In 애니메이션을 추가 할 수 있다. 첫 번째 매개변수는 애니메이션의 지속시간(duration)이고, 두 번째 매개변수는 애니메이션의 지연시간(delay)이다.

> install

```bash
npm install @rooneyhooks/use-fade-in
```

> Usage

```javascript
import useTitle from "@rooneyhooks/use-fade-in";

export default function App() {
    const fadeInH1 = useFadeIn(3, 3);
    const fadeInP = useFadeIn(5, 8);
    return (
        <div className='App'>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>GOGO</p>
        </div>
    );
}
```
