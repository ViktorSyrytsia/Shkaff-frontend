import React from "react";
import { Route, Switch } from "react-router-dom";

import { Categories } from "../components";
import ProductList from "../pages/product-list";

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={Categories} />
            <Route exact path='/:subcategory'
                render={(routerProps) => {
                    return (
                        <ProductList {...routerProps} />
                    )
                }}
            />
            <Route exact path='/:category'
                render={(routerProps) => {

                    return (
                        <ProductList {...routerProps} />
                    )
                }}
            />
        </Switch>
    )
}

export default Routes;
