import React from "react";
import {useDispatch, useSelector} from "react-redux";

import CartItem from "./cart-item";
import './style.scss'


const Cart = () => {
    const cartItems = useSelector(({Cart}) => Cart.list);
    const dispatch = useDispatch()

    return (
        <div className='cart'>
            <div className='cart__table'>
                <h2 className='cart__table__title'>Мій кошик ({cartItems.reduce( (sum, item) => sum + item.quantity, 0)})</h2>
                <div className='cart__table__items'>
                    {
                        cartItems.map(item => (
                            <CartItem key={Math.random()} item={item}/>
                        ))
                    }
                </div>
                <div className='cart__table__total'>
                    СУМА: {cartItems.reduce( (sum, item) => sum + item.quantity * item.price, 0)} UAH
                </div>
            </div>
            <div className='cart__checkout'>
                <h2 className='cart__checkout__title'>Оформити замовлення</h2>
                <div className='cart__checkout__form'>
                    form
                </div>
            </div>
        </div>
    )
}

export default Cart;
