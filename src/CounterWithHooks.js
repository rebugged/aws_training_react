import React, { useState, useEffect } from 'react';


function CounterWithHooks() {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("");

    useEffect(() => {
        document.title = `${count}`
    }, [title])

    var onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div>
            <br />
            <div>
                <input type="text" id='title' value={title} onChange={onChangeTitle}></input>
                <h1>{title}</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <button onClick={() => setCount(count + 1)}>Count : {count}</button>
            </div>
        </div>
    )
}

export default CounterWithHooks;