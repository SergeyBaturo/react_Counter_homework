import React from 'react'
import { useState } from 'react';
import './Counter.css'

export default function Counter(props) {

    const[number, setNumber] = useState(0);


  let editCounter = (amper) => {
    if(String(amper) === "-1" && number === 0) {
      return;
    }
    let result = number + amper;
    props.editAllProductsCount(amper)
    setNumber(result);
  }

  return (
    <div className='mainCounter'>
      <button onClick={() => editCounter(-1)}>-</button>
      <p>{number}</p>
      <button onClick={() => editCounter(+1)}>+</button>
    </div>
  )
}
