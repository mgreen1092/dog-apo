import React from 'react'

function RandomDogs (props) {
    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault()
                props.handleSubmit()
            }}>
                <input onChange={props.handleChange}type='text'></input>
                <button type='submit'>Dog Image</button>
            </form>
            <img alt='dog' src={props.dogImage}></img>
        </div>
    )
}

export default RandomDogs