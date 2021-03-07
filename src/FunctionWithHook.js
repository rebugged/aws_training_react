import react, {useState} from 'react';

function FunctionWithHook () {

    var initState = {firstName:'', lastName:''};

    const[name, setName] = useState(initState);
    const[id, setId] = useState("");

    const onFirstNameChange = (e) => {
        setName({...name, firstName: e.target.value});
    }

    const onLastNameChange = (e) => {
        setName({...name, lastName: e.target.value});
    }

    const changeId = (e) => {
        setId(e.target.value);
    }

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <input id="firstName" type="text" value={name.firstName} onChange={onFirstNameChange}></input>
            <h1>{name.firstName}</h1>
            <br/>
            <br/>
            <input id="firstName" type="text" value={name.lastName} onChange={onLastNameChange}></input>
            <h1>{name.lastName}</h1>
            <br/>
            <input id="idx" type="text" value={id} onChange={changeId}></input>
            <h1>{id}</h1>
        </div>
    )
}


export default FunctionWithHook;