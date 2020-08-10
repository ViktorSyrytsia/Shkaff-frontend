import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";

import Categories from './categories/categories.reducer'
import Products from './products/products.reducer'
import Subcategories from './subcategories/subcategories.reducer'


const rootReducer = (history) =>
    combineReducers({
        Categories,
        Products,
        Subcategories,
        router: connectRouter(history)
    });

export default rootReducer;
