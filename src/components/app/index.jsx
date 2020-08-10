import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";

import { getCategories } from "../../redux/categories/categories.actions";
import {getProducts} from "../../redux/products/products.actions";
import {getSubcategories} from "../../redux/subcategories/subcategories.actions";
import { Header } from '../../containers';
import { Categories, Footer } from '../index'

import 'semantic-ui-css/semantic.min.css'

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
        dispatch(getSubcategories())
    }, [dispatch])

    return (
        <div>
            <Header />
            <Categories />
            <Footer />
        </div>
    )
}

export default App

