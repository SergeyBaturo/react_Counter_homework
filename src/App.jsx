import './assets/styles/App.css'
import MenuPosition from './assets/Components/MenuPosition/MenuPosition.jsx'
import burger from './burger.jpg'
import potatoFree from './potatoFree.jpg'
import hotDog from './hotDog.jpg'
import { useState } from 'react'
import Counter from './assets/Components/Counter/Counter';


function App() {

  const[num, setNum] = useState(0)

  let incriment = () => {
    setNum(num + 1);
}

  let discriment = () => {
    setNum(num - 1);
}

  return (
    <>
      <div>
        <MenuPosition src={burger}  h1='Cупер сырный' pPlaseholder='512г' price='550₽' />
        <MenuPosition src={potatoFree}  h1='Картошка фри' pPlaseholder='180г' price='245₽' />
        <MenuPosition src={hotDog}  h1='Жгучий хот-дог' pPlaseholder='245г' price='239₽' />
      </div>
    </>
  )
}

export default App
