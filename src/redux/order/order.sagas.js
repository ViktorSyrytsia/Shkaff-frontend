import {takeEvery, call} from 'redux-saga/effects';

import {addOrder} from '../../services/orders';
import {ADD_ORDER} from './order.types';

function* handleAddOrder({payload}) {
    try {
        yield call(addOrder, payload);
    } catch (e) {
        console.log(e)
    }
}

export default function* orderSaga() {
    yield takeEvery(ADD_ORDER, handleAddOrder);
}
