import React from 'react'
import Counter from '../Counter/Counter.jsx'
import './MenuPosition.css'

export default function MenuPosition(props) {
  return (
    <div className='main'>
        <img src={props.src} />
        <div className="text">
            <h1>{props.h1}</h1>
            <p className='plaseholder'>{props.pPlaseholder}</p>
            <p>{props.price}</p>
        </div>
        <Counter />
    </div>
  )
}