# useTitle

> what is this ?

-   `head`의 `title` 안의 text를 바꿔주는 hook

> Usage

```javascript
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
