import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";

import { getCategories } from "../../redux/categories/categories.actions";
import { Header } from '../../containers';
import { Categories, Footer } from '../index'

import 'semantic-ui-css/semantic.min.css'

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
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

