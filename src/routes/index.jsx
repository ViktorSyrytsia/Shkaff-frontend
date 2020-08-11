import React from "react";
import {Route, Switch} from "react-router-dom";

import {Categories} from "../components";
import {ProductListPage, ProductDetailPage} from "../pages";
import {useSelector} from "react-redux";

const item = {
    id: "5f31c422c4f63146a8959b73",
    name: "Ray Banm",
    price: 19992,
    images: [
        {link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp6h0ks08-UuDec8LOOBTq-pRcYcW1GyVGEg&usqp=CAU"},
        {link: "https://www.optika.ua/media/Oprava-Ray-Ban-RB7029-5260.jpg"},
        {link: "https://ochki.ua/wa-data/public/shop/products/67/89/38967/images/57984/Ray-Ban-Hexagonal-Flat-Lenses-RB3548N-001-30.970.jpg"},
    ],
    subcategory: {
        id: "5f1f25acbfa56026a4c88471",
        name: "Glasses",
        __typename: "Subcategory",
    },
    category: {
        id: "5f1f2584bfa56026a4c8846d",
        name: "Жінкам",
        __typename: "Category"
    },
    sizes: {
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0,
        xxl: 0,
        oneSize: 1,
        __typename: "Sizes"
    },
    description: `Повертаючи традицію на голову. Зроблена з лляно-бавовняної суміші, ця сорочка має ступінчастий подол з
    бічними прорізами.

        - Прямо підходить
        - Відкритий комір
        - Кнопка спереду
        - передня кишеня з накладними кишенями
        - Закатані рукава

70% білизна, 30% бавовна машинне прання.
Довжина спини розміром S - 87 см / Модель - 176 см у висоту, і вона має розмір S`,
    createdAt: "2020-07-27T19:04:22.234Z",
    __typename: "Product"
}

const Routes = () => {
    const products = useSelector(({Products}) => Products.list)

    return (
        <Switch>
            <Route exact path='/' component={Categories}/>
            <Route exact path='/productDetail'>
                <ProductDetailPage product={products.length ? products[10] : item}/>
                </Route>
            <Route exact path='/' component={Categories} />
            <Route exact path='/:category'
                   render={(routerProps) => {

                       console.log(routerProps)
                       return (
                           <ProductListPage {...routerProps} />
                       )
                   }}
            />
        </Switch>
    )
}

export default Routes;
