import './assets/styles/App.css'
import MenuPosition from './assets/Components/MenuPosition/MenuPosition.jsx'
import burger from './burger.jpg'
import potatoFree from './potatoFree.jpg'
import hotDog from './hotDog.jpg'
import { useState } from 'react'
import Counter from './assets/Components/Counter/Counter';


function App() {

  const[allProductsCount, setAllProductsCount] = useState(0)

  let editAllProductsCount = (amper) => {
    setAllProductsCount(allProductsCount + amper)
  }

  return (
    <>
      <div>
        <h1 className='allProductsCount'>{allProductsCount}</h1>
        <div className="foodCards">
          <MenuPosition src={burger}  h1='Cупер сырный' pPlaseholder='512г' price='550₽' editAllProductsCount={editAllProductsCount} />
          <MenuPosition src={potatoFree}  h1='Картошка фри' pPlaseholder='180г' price='245₽' editAllProductsCount={editAllProductsCount} />
          <MenuPosition src={hotDog}  h1='Жгучий хот-дог' pPlaseholder='245г' price='239₽' editAllProductsCount={editAllProductsCount} />
        </div>
      </div>
    </>
  )
}

export default App
