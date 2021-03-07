import React, {useState}from 'react'

function HookFunctionArray() {

    const[items, setItems] = useState([]);

    var addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <br/>
            <br/>
            <button onClick={addItem}>Add a item</button>
            <br/>
            <br/>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookFunctionArray
