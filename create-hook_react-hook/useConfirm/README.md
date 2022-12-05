# useConfirm

> what is this ?

-   버튼을 클릭하면 comfirm Alert 창이 뜨고 확인을 누를 경우 첫 번째 매개변수로 넣어준 함수가 실행되고, 취소를 누를 경우 두 번째 매개 변수로 넣어준 함수가 실행된다.

> install

```bash
npm install @rooneyhooks/use-confirm
```

> Usage

```javascript
import useTitle from "@rooneyhooks/use-confirm";

export default function App() {
    const deleteWorld = () => console.log("Deleting the world ...");
    const abort = () => console.log("Abort");
    const confirmDelete = useConfirm("Are you sure ?", deleteWorld, abort);
    return (
        <div className='App'>
            <h1>Hello</h1>
            <button onClick={confirmDelete}>Click</button>
        </div>
    );
}
```
