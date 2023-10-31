import Counter from "./components/Counter/Index";

Counter;
const App = () => {
  const [itemsInArray, setItemsInArray] = usestate([]);
  const addItemClickHandler = () => {
    const inputVal = document.getElementById("addItemInput").ariaValueMax;
    setItemsInArray([
      ...itemsInArray,
      { itemName: inputVal, initialQuantity: 0 },
    ]);
  };

  return (
    <div>
      <input type="text" id="addItemInput" />
      <button onClick={addItemClickHandler}>Add Item</button>
      {itemsInArray.map((itemEntry) => {
        return (
          <Counter
            key={itemEntry.itemName}
            itemName={itemEntry.itemName}
            initialQuantity={itemEntry.initialQuantity}
          />
        );
      })}
    </div>
  );
};
export default App;
