import axios from 'axios';
import React, { useState } from 'react'

export default function Crud() {
    const [state, setState] = useState({
        firstState: "",
        lastState: ""
    })

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
       
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', { state })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstState"
                    onChange={handleChange}
                    
                />
                <input
                    type="text"
                    name="lastState"
                    onChange={handleChange}
                    
                />
                <button type="submit">BUTON</button>
            </form>
            <h2>Veri1:{state.firstState}</h2>
            <h2>Veri2:{state.lastState}</h2>
        </div>
    )
}
