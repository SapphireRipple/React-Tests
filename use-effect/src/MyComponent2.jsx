import { useState, useEffect } from 'react';
function MyComponent2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    function handleReSize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", handleReSize);
        console.log("Event listener added");
    }, [])
    ;
    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        
        </>
    );
}
export default MyComponent2