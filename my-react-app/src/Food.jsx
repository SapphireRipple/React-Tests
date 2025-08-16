function Food() {
    const food1 = "Shashlik";
    const food2 = "Plov";
    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food