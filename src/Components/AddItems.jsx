
import { useState } from "react";

export default function AddItems() { 
  const [items, setItem] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [currentShop, setCurrentShop] = useState("");
  //const [editing, setEditing] = useState(null);
  //const [isDone, setIsDone] = useState(false);

  const handleChangeItem = (event) => {
    setCurrentItem(event.target.value);
  }

  const handleChangeQuantity = (event) => {
    setCurrentQuantity(event.target.value);
  }

  const handleChangeShop = (event) => {
    setCurrentShop(event.target.value);
  }

  //this function will run when +Add button is clicked
  //if there isn't an input, an error message in red will show up
  //if you type something and chose the quantity and shop, these info will be displayed
  //once you add the item, the input space will go back to "What do I need to buy?"
  const handleClick = () => {
    if (currentItem.length > 0) {
      const newItem = { item: currentItem, quantity: currentQuantity, shop: currentShop};
      setItem(oldArray => [...oldArray, newItem] ); 
      setCurrentItem("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please type an item name.");
    }
  }

  //const handleEditing = (index) => {
  //  setCurrentItem(items[index]);
  //  setEditing(index);
  //}

  //const handleDelete = () => {
    //setIsDone(!isDone)
  //}

  const handleDelete = (index) => {
    const currentItem = [...items];
    currentItem.splice(index, 1); //.splice() changes the contents of an array by removing/replacing existing elements and/or adding new elements in place
    setItem(currentItem);
  };

  return (
    <div className="App">
      <h1>my shopping ListO</h1>
      <input
        onChange={handleChangeItem}
        type="text"
        placeholder="What do I need to buy?"
        value={currentItem}
      />
      <p style={{ color: "red"}}>{errorMessage}</p>
      <label for="shop">Where I am going to buy it:</label>
            <select onChange={handleChangeShop} id="shop" name="shop">
                <option value="Choose">Choose a shop</option>
                <option value="Woolworth">Woolworth</option>
                <option value="Coles">Coles</option>
                <option value="Aldi">Aldi</option>
                <option value="Other">Other</option>
            </select>
      <br />
      <br />
      <label for="amount">Quantity:</label>
            <input type="number" id="number" onChange={handleChangeQuantity} value={currentQuantity} min={1}/>
      <br />
      <br />
      <button onClick={handleClick}>+ Add</button>
      <br />
      <br />
      {items.map((item, index) => (
          <li key={index} /*onClick={handleClickDone} style={{ textDecoration: isDone && "line-through" }}*/>
            {item.item} | {item.quantity} | {item.shop}
            {/*<button onClick={() => handleEditing(index)}>Edit</button>}*/}
            {<button onClick={() => handleDelete()}>Bought</button>}
            {/*<button onClick={handleDelete} style={{ textDecoration: isDone && "line-through" }}>Done</button>*/}
          </li>    
        ))}
       
    </div>
  );
}
