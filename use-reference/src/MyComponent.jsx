import React, { useState, useRef, useEffect } from 'react';

function MyComponent() {
    let [number, setNumber] = useState(0);
    const ref = useRef(0);
    const inputRef = useRef(null);
    useEffect(() =>
    {
        console.log("COMPONENT RENDER");
    });
    function handleClick() {
        ref.current++;
        console.log(ref.current);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
    return (
        <div>
        <button onClick={handleClick}>Click Me!</button>
            <input ref={inputRef} />
        </div>
    );
}
export default MyComponent