import React from 'react';

    const initialList = [
    {
        id: 'a',
        name: 'Bananas',
    },
    {
        id: 'b',
        name: 'Grapes',
    },
    ];

    const Card = () => {
        const [list, setList] = React.useState(initialList);
        const [name, setName] = React.useState('');

        function handleChange (event) {
            setName(event.target.value);
        }

        function handleAdd (){
            const newList = list.concat({ name });

            setList(newList);
        }   

  return (
    <div>
        <div>
            <input type="text" value={name} onChange={handleChange}/>
            <button type="button" onClick={handleAdd}>+ Add</button> 
        </div>
    
        <ul>
            {list.map((item) => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  );
};

export default Card;