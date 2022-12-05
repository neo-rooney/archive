# useTitle

> what is this ?

-   `head`의 `title` 안의 text를 바꿔주는 hook

> install

```bash
npm install @rooneyhooks/use-title
```

> Usage

```javascript
import useTitle from "@rooneyhooks/use-title";

export default function App() {
    const titleUpdater = useTitle("...Loading");
    setTimeout(() => titleUpdater("Home"), 8000);
    return (
        <div className='App'>
            <h1>Hello</h1>
        </div>
    );
}
```
