import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import SubcategoryFilter from './subcategory-filter/';
import ProductCard from './product-card';
import { Card, Menu, Dropdown } from 'semantic-ui-react';

import './style.scss';

const ProductList = ({ location: { query }, match: { params } }) => {

        const [category, setCategory] = useState(null);
        const [subcategory, setSubategory] = useState(null);

        const { subcategories, products } = useSelector(({ Products, Subcategories }) => ({
                subcategories: Subcategories.list,
                products: Products.list,
        }))

        useEffect(() => {
                if (query && query.__typename === "Category") {
                        setCategory(query.id);
                        setSubategory(null)
                } else if (query && query.__typename === "Subcategory") {
                        setSubategory(query.id);
                        const subObj = subcategories.find(sub => sub.id === query.id);
                        setCategory(subObj.category.id)
                }
        }, [query])

        const onSelectSubcategory = (id) => {
                setSubategory(id)
        }


        return (
                <div className="product-list__container">
                        <div className="product-list__title">{params.subcategory.toUpperCase()}</div>
                        <div className="subcategories-filter__container">
                                <SubcategoryFilter
                                        onSelectSubcategory={onSelectSubcategory}
                                        selected={subcategory}
                                        subcategories={subcategories
                                                .filter(sub => sub.category.id === category)} />
                        </div>
                        <div className="product-list__dropdown-section">
                                <Menu>
                                        <Dropdown
                                                item
                                                simple
                                                text='Розмір'
                                                direction='right'
                                                options={subcategories && subcategories}
                                        />
                                        <Menu.Menu position='right'>
                                                <Dropdown
                                                        item
                                                        simple
                                                        text='Сортувати за'
                                                        direction='right'
                                                        options={subcategories && subcategories}
                                                />
                                        </Menu.Menu>
                                </Menu>
                        </div>
                        <div className="product-cards__container">
                                <div className="product-cards__list">
                                        <Card.Group itemsPerRow={4}>
                                                {products && products
                                                        .filter(prod => prod.category.id === category)
                                                        .filter(prod => subcategory ? prod.subcategory.id === subcategory : prod)
                                                        .map(product => <ProductCard key={product.id} product={product} />)}

                                        </Card.Group>
                                </div>
                        </div>
                </div>
        )
}

export default ProductList
