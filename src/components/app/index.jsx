import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

import { getCategories } from "../../redux/categories/categories.actions";
import {getProducts} from "../../redux/products/products.actions";
import {getSubcategories} from "../../redux/subcategories/subcategories.actions";
import { Header } from '../../containers';
import { Categories, Footer, LoadingPage } from '../index'

import 'semantic-ui-css/semantic.min.css'

const App = () => {
    const dispatch = useDispatch();
    const {productsLoading, categoriesLoading, subcategoriesLoading} = useSelector(({Products, Categories, Subcategories}) => ({
        productsLoading: Products.loading,
        categoriesLoading: Categories.loading,
        subcategoriesLoading: Subcategories.loading,
    }))

    const [loadingPageVisibility, setLoadingPageVisibility] = useState(true)

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
        dispatch(getSubcategories())
    }, [dispatch])

    useEffect(() => {
        if (!productsLoading && !categoriesLoading && !subcategoriesLoading) {
          setLoadingPageVisibility(false)
       }
    }, [productsLoading, categoriesLoading, subcategoriesLoading])

    return (
        <div>
            <LoadingPage isVisible={loadingPageVisibility}/>
            <Header />
            <Categories />
            <Footer />
        </div>
    )
}

export default App

