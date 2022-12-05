# useInput

> what is this ?

-   input 안에 이름(데이터)를 넣으면 React의 state를 변경하여 리랜더링해주는 Hook
-   useInput의 2 번째 매개변수에 `Boolean`을 return 할 수 있는 함수를 정의하여서 입력값의 길이를 제한한다거나, 특정 문자를 넣을 수 없게 할 수 있음

> install

```bash
npm install @rooneyhooks/use-tabs
```

> Usage

```javascript
import useTitle from "@rooneyhooks/use-tabs";

const App = () => {
    const validator = value => !value.includes("@");
    const name = useInput("Mr. ", validator);
    return (
        <div className='App'>
            <h1>Hello</h1>
            <input placeholder='Name' {...name.props} />
        </div>
    );
};
```
