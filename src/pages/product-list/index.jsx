import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import SubcategoryFilter from './subcategory-filter/';
import ProductCard from './product-card';
import { Card, Menu } from 'semantic-ui-react';
import { DropDown } from '../../components';

import './style.scss';

const ProductList = ({ location: { query }, match: { params } }) => {
        const [category, setCategory] = useState(null);
        const [subcategory, setSubategory] = useState(null);

        const { subcategories, products, router, categories } = useSelector(({ Products, Subcategories, router, Categories }) => ({
                subcategories: Subcategories.list,
                products: Products.list,
                router: router.location.pathname.slice(1),
                categories: Categories.list
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

        }, [query, subcategories])

        useEffect(() => {
                const catObj = categories && categories.find(cat => cat.name === router[0].toUpperCase() + router.slice(1))
                setCategory(catObj ? catObj.id : null)
        }, [categories, router])

        const onSelectSubcategory = (id) => {
                setSubategory(id)
        }


        //================================================//
        const filterOptions = [
                { key: 'oneSize', text: 'oneSize', value: 'oneSize' },
                { key: 'xs', text: 'xs', value: 'xs' },
                { key: 's', text: 's', value: 's' },
                { key: 'm', text: 'm', value: 'm' },
                { key: 'l', text: 'l', value: 'l' },
                { key: 'xl', text: 'xl', value: 'xl' },
                { key: 'xxl', text: 'xxl', value: 'xxl' }
        ]

        const filterName = 'Розмір'

        const sortOptions = [
                { key: 'ціною', text: 'ціною', value: 'ціною' },
                { key: 'рейтингом', text: 'рейтингом', value: 'рейтингом' },
                { key: 'датою', text: 'датою', value: 'датою' },
        ]

        const sortName = 'Сортувати за'

        return (
                <div className="product-list__container">
                        <div className="product-list__title">{params.category.toUpperCase()}</div>
                        <div className="subcategories-filter__container">
                                <SubcategoryFilter
                                        onSelectSubcategory={onSelectSubcategory}
                                        selected={subcategory}
                                        subcategories={subcategories
                                                .filter(sub => sub.category.id === category)} />
                        </div>


                        <div className="product-list__dropdown-section">
                                <Menu>
                                        <Menu.Menu position='left'>
                                                <DropDown name={filterName} options={filterOptions} />
                                        </Menu.Menu>
                                        <Menu.Menu position='right'>
                                                <DropDown name={sortName} options={sortOptions} />
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
