import { all } from 'redux-saga/effects';

import Categories from './categories/categories.saga'
import Products from './products/products.saga'
import Subcategories from './subcategories/subcategories.saga'

export default function* rootSaga() {
    yield all([Categories(), Products(), Subcategories()]);
}
