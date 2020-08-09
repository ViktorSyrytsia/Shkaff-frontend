import { all } from 'redux-saga/effects';

import Categories from './categories/categories.saga'

export default function* rootSaga() {
    yield all([Categories()]);
}
