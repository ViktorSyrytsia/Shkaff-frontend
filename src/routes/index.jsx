import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProductList } from '../components/productList';

import {Categories} from "../components";

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={Categories} />
            <Route exact path='/:category'

                render={(routerProps) => {

                    console.log(routerProps)
                    return (
                        <ProductList {...routerProps} />
                    )
                }}
            />
            {/*       <Route exact path='/чоловыкам' component={CategoriesPage}/>
            <Route exact path='/subcategories' component={SubcategoriesPage}/>
            <Route exact path='/products' component={ProductsPage}/>
            <Route exact path='/orders' component={OrdersPage}/>
            <Route exact path='/settings' component={SettingsPage}/>*/}
        </Switch>
    )
}

export default Routes;
