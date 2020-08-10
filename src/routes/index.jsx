import React from "react";
import { Route, Switch } from "react-router-dom";

import { Categories, ProductList } from "../components";

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={Categories} />
            <Route exact path='/:subcategory'
                   render={(routerProps) => {


                       console.log(routerProps)
                       return (
                           <ProductList {...routerProps} />
                       )
                   }}
            />
            <Route exact path='/:category'
                render={(routerProps) => {
<<<<<<< HEAD
=======


                    console.log(routerProps)
>>>>>>> a4a18326811c6666e169c933ce9fe7daf1786291
                    return (
                        <ProductList {...routerProps} />
                    )
                }}
            />
        </Switch>
    )
}

export default Routes;
