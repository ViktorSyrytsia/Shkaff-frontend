import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import SubcategoryFilter from './subcategory-filter/';
import ProductCard from './product-card';
import { Card, Menu } from 'semantic-ui-react';
import { DropDown } from '../../components';
import { getFromLocalStorage, setToLocalStorage } from '../../services/local-storage';

import './style.scss';

const ProductList = ({ location: { query }, match: { params } }) => {

        const { subcategories, products, router, categories } = useSelector(({ Products, Subcategories, router, Categories }) => ({
                subcategories: Subcategories.list,
                products: Products.list,
                router: router.location.pathname.slice(1),
                categories: Categories.list
        }))

        const [categoryID, setCategoryID] = useState(null);
        const [subcategoryID, setSubategoryID] = useState(null);
        const [filtredProducts, setFiltredProducts] = useState(products);
        const [sortedProducts, setSortedProducts] = useState(filtredProducts)

        const [filter, setFilter] = useState('all');
        const [sort, setSort] = useState('new');

        useEffect(() => {
                if (filter === 'all') {
                        setFiltredProducts(products)
                } else {
                        setFiltredProducts(products.filter(prod => prod.sizes[filter] > 0));
                }
        }, [filter, products]);

        useEffect(() => {
                switch (sort) {
                        case 'new':
                                setSortedProducts(filtredProducts.sort((a, b) =>
                                        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
                                break;
                        case 'priceLow':
                                setSortedProducts(filtredProducts.sort((a, b) =>
                                        b.price - a.price))
                                break;
                        case 'priceHigh':
                                setSortedProducts(filtredProducts.sort((a, b) =>
                                        a.price - b.price))
                                break;
                        // case 'rating':
                        //         setSortedProducts(filtredProducts.sort((a, b) =>
                        //                 new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
                        //         break;

                        default:
                                break;
                }
        }, [sort, filtredProducts])

        useEffect(() => {

                if (query && query.__typename === "Category") {
                        setCategoryID(query.id);
                        setSubategoryID(null)
                } else if (query && query.__typename === "Subcategory") {
                        setSubategoryID(query.id);
                        const subObj = subcategories.find(sub => sub.id === query.id);
                        setCategoryID(subObj.category.id)
                }

        }, [query, subcategories])

        useEffect(() => {
                const catObj = categories && categories.find(cat => cat.name === router[0].toUpperCase() + router.slice(1))
                setCategoryID(catObj ? catObj.id : null);

        }, [categories, router])

        useEffect(() => {
                setSubategoryID(getFromLocalStorage('currentSubcategory'));
        }, [])


        const onSelectSubcategory = (id) => {
                setToLocalStorage('currentSubcategory', id);
                setSubategoryID(id);
        }

        const handleDropDown = (e, options, name) => {
                if (name === 'Розмір') {
                        setFilter(options.value)
                } else {
                        setSort(options.value)
                }
        }

        //================================================//
        const filterOptions = [
                { key: 'all', text: 'Усі', value: 'all' },
                { key: 'oneSize', text: 'Без розміру', value: 'oneSize' },
                { key: 'xs', text: 'xs', value: 'xs' },
                { key: 's', text: 's', value: 's' },
                { key: 'm', text: 'm', value: 'm' },
                { key: 'l', text: 'l', value: 'l' },
                { key: 'xl', text: 'xl', value: 'xl' },
                { key: 'xxl', text: 'xxl', value: 'xxl' }
        ]

        const filterName = 'Розмір'

        const sortOptions = [
                { key: 'priceLow', text: 'Спочатку дешевші', value: 'priceLow' },
                { key: 'priceHigh', text: 'Спочатку дорожчі', value: 'priceHigh' },
                { key: 'rating', text: 'Рейтингом', value: 'rating' },
                { key: 'new', text: 'Новинки', value: 'new' },
        ]

        const sortName = 'Сортувати за'

        return (
                <div className="product-list__container">
                        <div className="product-list__title">{params.category.toUpperCase()}</div>
                        <div className="subcategories-filter__container">
                                <SubcategoryFilter
                                        onSelectSubcategory={onSelectSubcategory}
                                        selected={subcategoryID}
                                        subcategories={subcategories
                                                .filter(sub => sub.category.id === categoryID)} />
                        </div>


                        <div className="product-list__dropdown-section">
                                <Menu>
                                        <Menu.Menu position='left'>
                                                <DropDown
                                                        name={filterName}
                                                        options={filterOptions}
                                                        handleDropDown={handleDropDown}
                                                />
                                        </Menu.Menu>
                                        <Menu.Menu position='right'>
                                                <DropDown
                                                        name={sortName}
                                                        options={sortOptions}
                                                        handleDropDown={handleDropDown} />
                                        </Menu.Menu>
                                </Menu>
                        </div>


                        <div className="product-cards__container">
                                <div className="product-cards__list">
                                        <Card.Group itemsPerRow={4}>
                                                {sortedProducts && filtredProducts
                                                        .filter(prod => prod.category.id === categoryID)
                                                        .filter(prod => subcategoryID ? prod.subcategory.id === subcategoryID : prod)
                                                        .map(product => <ProductCard key={product.id} product={product} />)}

                                        </Card.Group>
                                </div>
                        </div>
                </div>
        )
}

export default ProductList
