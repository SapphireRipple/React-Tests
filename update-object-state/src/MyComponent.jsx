import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState({
        year: 2023,
        make: "Tesla",
        model: "Model Y"
    });
    function handleYearChange(event) {
        setCar(c => ({ ...car, year: event.target.value }));
    }
    function handleMakeChange(event) {
        setCar(c => ({ ...car, make: event.target.value }));

    }
    function handleModelChange(event) {
        setCar(c => ({ ...car, model: event.target.value }));

    }
    return (<>
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.make} onChange={handleMakeChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />

        </div>
    </>);
}
export default MyComponent