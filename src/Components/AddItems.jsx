
import { useState } from "react";

export default function AddItems() { 
  const [currentItem, setCurrentItem] = useState("");
  const [items, setItem] = useState([]);

  const handleChange = (event) => {
    // itemName = event.target.value;
    //console.log(itemName)
    setCurrentItem(event.target.value);
  }

  const handleClick = (event) => {
    setItem(oldArray => [...oldArray, currentItem] );
    setCurrentItem("");
  }

  return (
    <div className="App">
      <h1>My Shopping List</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What do I need to buy?"
      />
      <br />
      <br />
      <label for="shop">Where I am going to buy it:</label>
            <select id="shop" name="shop">
                <option value="Woolworth">Woolworth</option>
                <option value="Coles">Coles</option>
                <option value="Aldi">Aldi</option>
                <option value="Other">Other</option>
            </select>
      <br />
      <br />
      <label for="amount">Quantity:</label>
            <input type="number" id="number"/>
      <br />
      <br />
      <button onClick={handleClick}>+ Add</button>
      <br />
      <br />
      <ul><li>{items}</li></ul>
       
    </div>
  );
}
