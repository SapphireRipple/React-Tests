import React, { useState } from 'react';
function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    function handleAddFood() {
        const food = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, food]);
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }
    return (<div>
        <h2>List Of Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleAddFood}>Add food</button>
    </div>);
}
export default MyComponent