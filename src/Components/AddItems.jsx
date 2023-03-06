
import { useState } from "react";

export default function AddItems() { 
  const [items, setItem] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [currentShop, setCurrentShop] = useState("");
  //const [editing, setEditing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleChangeItem = (event) => {
    setCurrentItem(event.target.value);
  }

  const handleChangeQuantity = (event) => {
    setCurrentQuantity(event.target.value);
  }

  const handleChangeShop = (event) => {
    setCurrentShop(event.target.value);
  }

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

  //const handleEditing = () => {
   // setEditing(true)
   // handleChangeItem()
    
  //}

  const handleClickDone = () => {
    setIsDone(!isDone);
  }

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
          <li key={index} onClick={handleClickDone} style={{ textDecoration: isDone && "line-through" }}>
            {item.item} | {item.quantity} | {item.shop}
            {/*<button onClick={() => handleEditing()}>Edit</button>*/}
          </li>    
        ))}
       
    </div>
  );
}
