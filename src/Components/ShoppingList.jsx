import React, { useState } from 'react';

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const newItems = [...items];
      newItems[editIndex] = itemName;
      setItems(newItems);
      setEditIndex(null);
    } else {
      setItems([...items, itemName]);
    }
    setItemName('');
  };

  const handleEdit = (index) => {
    setItemName(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name: 
          <input type="text" value={itemName} onChange ={handleChange} />
        </label>
        
        <button type="submit">{editIndex !== null ? 'Edit Item' : 'Add Item'}</button>

      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;