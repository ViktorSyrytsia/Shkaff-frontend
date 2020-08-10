import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import SubcategoryFilter from './subcategory-filter';
import ProductCard from './product-card';

const ProductList = ({ match: { params } }) => {

        const { subcategories, products } = useSelector(({ Products, Subcategories }) => ({
                subcategories: Subcategories.list,
                products: Products.list,
        }))


        // const findTypeName = (categories, subcategories, params) => {
        //         const category = categories.find(cat => cat.name === params);
        //         if (!category) {
        //                 const subcategory = subcategories.find(sc => sc.name === params);
        //                 const category = categories.find(cat => cat.id === subcategory.category.id);
        //                 return {
        //                         category: category.name,
        //                         subcategory: subcategory.name
        //                 }

        //         } else {
        //                 return {
        //                         category: category.name
        //                 }
        //         }
        // }

        // console.log(findTypeName(categories, subCategories, params.category));
        return (
                <div>
                        <SubcategoryFilter subCategories={subcategories} />
                        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
        )
}

export default ProductList
