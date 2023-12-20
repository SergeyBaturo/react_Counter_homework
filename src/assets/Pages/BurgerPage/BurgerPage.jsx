import React from 'react'
import "./BurgerPage.css"
import burgerImg from '../../../burger.jpg'

export default function BurgerPage() {
  return (
    <div className='main'>
        <div className="burgerName">
            <h1>Мясная бомба</h1>
        </div>
        <div className="content_box">
            <img src={burgerImg} alt="" />
            <div className="text_box">
                <p>Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</p>
                <ul>
                    Состав:
                    <li>Пшеничная булочка</li>
                    <li>Котлета из говядины</li>
                    <li>Красный лук</li>
                    <li>Листья салата</li>
                    <li>Соус горчичный</li>
                </ul>
                <p className='placeholder'>520г. ккал 430</p>
            </div>
        </div>
        <button>Добавить</button>
        <div className="price">689₽</div>
    </div>
  )
}