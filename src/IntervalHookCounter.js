import React, { useState, useEffect } from 'react'
import BaseApi from './BaseApi';

function IntervalHookCounter() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(0);

    /* useEffect(() => {
        console.log('use effect');
        BaseApi('GET', 'posts', id).then(response => {
            if (response && response.status === 200) {
                setPost(response.data);
            }
        }).catch(err => {
            console.error(err);
        })
    }, []); */

    var clickHandler = (e) => {
        BaseApi('GET', 'posts', id).then(response => {
            if (response && response.status === 200) {
                setPost(response.data);
            }
        }).catch(err => {
            console.error(err);
        })
    };

    var onInputChangeHandler = (e) => {
        setId(e.target.value);
    };

    return (
        <div>
            <br />
            <input type="text" name="id" id="textId" placeholder="Post ID" onChange={onInputChangeHandler}/>
            <br/>
            <br/>
            <input type="button" onClick={clickHandler}></input>
            <br />
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>
                        <h1>{post.title}</h1>
                        <h1>{post.body}</h1>
                    </li>)
                }
            </ul> */}
        </div>
    )
}

export default IntervalHookCounter
