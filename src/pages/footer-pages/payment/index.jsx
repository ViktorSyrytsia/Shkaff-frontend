import React from 'react'

import './style.scss';
const Payment = () => {
    return (
        <div className="container">
            <h1>Оплата</h1>
            <p>
                Після оформлення замовлення протягом 24 годин з метою підтвердження замовлення з Вами зв’яжеться наш менеджер враховуючи вибраний Вами спосіб зв’язку (<span className="bold-word">email, телефонний дзвінок, Telegram, Viber</span>).
            </p>
            <p>
                Оплата здійснюється на картку приватбанку / монобанку після підтвердження покупцем замовлення та попередньо перед його відправкою.
            </p>
            <p>
                Після оплати замовлення - товар буде надіслано за вказаною Вами адресою.
            </p>
        </div>
    )
}

export default Payment