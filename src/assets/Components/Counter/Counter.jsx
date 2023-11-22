import React from 'react'
import { useState } from 'react';
import './Counter.css'

export default function Counter() {

    const[number, setNumber] = useState(0);

    let incriment = () => {
        setNumber(number + 1);
    }

    let discriment = () => {
        setNumber(number - 1);
    }

  return (
    <div className='mainCounter'>
      <button onClick={discriment}>-</button>
      <p>{number}</p>
      <button onClick={incriment}>+</button>
    </div>
  )
}
