import List from './List.jsx'
function App() {
  const fruits = [{ id: 1, name: "kiwi", calories: 42 },
  { id: 2, name: "pomegranate", calories: 233 },
  { id: 3, name: "passionfruit", calories: 17 },
  { id: 4, name: "watermelon", calories: 1371 },
  { id: 5, name: "grapefruit", calories: 104 }]
  const vegetables = [{ id: 6, name: "potatoes", calories: 110 },
  { id: 7, name: "celery", calories: 15 },
  { id: 8, name: "carrots", calories: 25 },
  { id: 9, name: "corn", calories: 63 },
  { id: 10, name: "broccoli", calories: 50 }]
  return (<>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"></List> : null}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"></List >}
  </>);
}

export default App
