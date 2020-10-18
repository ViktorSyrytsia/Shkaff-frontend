import React from 'react'

import './style.scss'

const Delivery = () => {
    return (
        <div className="container">
            <h1>Доставка</h1>
            <p>
                Відправка замовлення здійснюється вдень його підтвердження (якщо замовлення було підтверджено до 12-00 год) або ж наступного дня <span className='bold-word'>до відділень</span>:
   </p>
            <ul>
                <li><span className='bold-word'>Нова Пошта</span></li>
                <li><span className='bold-word'>Укр Пошта</span></li>
                <li><span className='bold-word'>Justin</span></li>
            </ul>
            <p>
                <i>Важливо!</i> Не підлягають поверненню товари для новонароджених, постільна білизна та нижня білизна.
  </p>
            <p>Повернення інших товарів можливе лише за наявності зовнішніх дефектів (пляма, відсутність гудзика та ін.), невідповідності замовлення або товар в замовленні з неповною комплектацією.
</p>
            <p>
                Якщо протягом 24 годин після отримання замовлення клієнт не перевірив замовлення на наявність вищеперелічених обставин <span className='bold-word'>Shkaff</span> може відмовити в прийнятті повернення.

            </p>
            <p>
                У разі виявлення дефектів або невідповідності товару замовлення - необхідно повідомити нашому менеджеру протягом доби від моменту отримання замовлення для погодження деталей повернення такого замовлення.

            </p>
        </div>
    )
}

export default Delivery