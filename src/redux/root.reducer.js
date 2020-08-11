import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";

import Categories from './categories/categories.reducer'
import Products from './products/products.reducer'
import Subcategories from './subcategories/subcategories.reducer'
import Wishlist from './wishlist/wishlist.reducer'

const rootReducer = (history) =>
    combineReducers({
        Categories,
        Products,
        Subcategories,
        Wishlist,
        router: connectRouter(history)
    });

export default rootReducer;
