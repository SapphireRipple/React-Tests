import PropTypes from 'prop-types';
function List(props) {
    const itemList = props.items;
    const category = props.category;
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

    // const lowCalorieFruits = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b> </li>);
    // const highCalorieFruits = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b> </li>);
    const allFruits = itemList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b> </li>);
    return (<>
        <h1 className="list-category">{category}:</h1>
        <ol className="list-items">{allFruits}</ol>
        {/* <h2>Low Calorie Fruits</h2>
        <ol>{lowCalorieFruits}</ol>
        <h2>High Calorie Fruits</h2>
        <ol>{highCalorieFruits}</ol> */}
    </>)
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}
export default List  