import React, { useState } from 'react'
import './UseState.css'

const UseState = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
  return (
    <>
        <h2>UseState Hook</h2>
        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <button className="counter-btn" onClick={increment}>+</button>
            <p className="counter-value"> {counter} </p>
            <button className="counter-btn" onClick={decrement}>-</button>
        </div>

        <hr />
    </>
  )
}

export default UseState