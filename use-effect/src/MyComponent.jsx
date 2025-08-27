import { useState, useEffect } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    function addCount() {
        setCount(c => c+1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }
    // useEffect(() => { document.title = `Count: ${count}` }); // <- only updates upon value change
    // useEffect(() => {document.title="My Counter"}, []); <- only updates once upon mount
    // useEffect(() => { document.title = `Count: ${count}` }, [count]); // <- when the mount or count changes
    useEffect(() => { document.title = `Count: ${color} ${count}` }, [count]); // <- color doesn't change, count does
    return (<>
        <p style={{color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </>);
}
export default MyComponent