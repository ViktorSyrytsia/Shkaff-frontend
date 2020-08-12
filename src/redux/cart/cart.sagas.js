import { takeEvery, put } from 'redux-saga/effects';

import { setCart } from './cart.actions';
import {
  GET_CART,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_QUANTITY
} from './cart.types';
import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../services/local-storage';

function* handleCartLoad() {
  const cart = getFromLocalStorage('cart');
  yield put(setCart(cart));
}

function* handleAddCartItem({ payload }) {
  const cart = getFromLocalStorage('cart');
  const possibleItemInCart = cart.find(
    (item) =>
      item._id === payload._id && item.selectedSize === payload.selectedSize
  );

  let newCart;
  if (possibleItemInCart) {
    newCart = cart.map((item) => {
      item._id === payload._id && item.quantity++;
      return item;
    });
  } else {
    newCart = [...cart, payload];
  }

  setToLocalStorage('cart', newCart);
  yield put(setCart(newCart));
}

function* handleRemoveCartItem({ payload: { _id, selectedSize } }) {
  const cart = getFromLocalStorage('cart');
  const newCart = cart.filter(
    (item) =>
      item._id !== _id ||
      (item._id === _id && item.selectedSize !== selectedSize)
  );

  setToLocalStorage('cart', newCart);
  yield put(setCart(newCart));
}

function* handleSetCartItemQuantity({
  payload: {
    item: { _id, selectedSize },
    value,
    key
  }
}) {
  const cart = getFromLocalStorage('cart');
  const newCart = cart.map((item) => {
    if (item._id === _id && item.selectedSize === selectedSize) {
      // key will be true if user typing inside input
      item.quantity = key ? value || 1 : item.quantity + value;
    }
    return item;
  });
  setToLocalStorage('cart', newCart);
  yield put(setCart(newCart));
}

export default function* categoriesSaga() {
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_ITEM_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_ITEM_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
}
