import React from "react";
import { Route, Switch } from "react-router-dom";

import { Categories } from "../components";
import { ProductListPage, ProductDetailPage, Cart, ThanksPage } from "../pages";
import { About, Payment, OurProducts, Delivery } from '../pages/footer-pages'

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={Categories} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/thanks' component={ThanksPage} />
            <Route exact path='/:category' render={(routerProps) => <ProductListPage {...routerProps} />} />
            <Route exact path='/:category/:subcategory/:id' render={({ match }) => <ProductDetailPage productId={match.params.id} />} />
            <Route exact path='/others/footer/page/about' component={About} />
            <Route exact path='/others/footer/page/our-products' component={OurProducts} />
            <Route exact path='/others/footer/page/payment' component={Payment} />
            <Route exact path='/others/footer/page/delivery' component={Delivery} />
        </Switch>
    )
}

export default Routes;
