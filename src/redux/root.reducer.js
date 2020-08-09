import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";

import Categories from './categories/categories.reducer'


const rootReducer = (history) =>
    combineReducers({
        Categories,
        router: connectRouter(history)
    });

export default rootReducer;
