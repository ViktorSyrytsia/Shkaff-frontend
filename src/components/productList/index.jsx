import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import SubcategoryFilter from './subcategoryFilter/';
import ProductCard from './productCard';

const ProductList = ({ match: { params } }) => {
        // const [category, setCategory] = useState(null);
        // const [subcategory, setSubcategory] = useState(null);


        const categories = useSelector(({ Categories }) => Categories.list);
        const subCategories = useSelector(({ Subcategories }) => Subcategories.list);
        const products = useSelector(({ Products }) => Products.list);

        const findTypeName = (categories, subcategories, params) => {
                const category = categories.find(cat => cat.name === params);
                if (!category) {
                        const subcategory = subcategories.find(sc => sc.name === params);
                        const category = categories.find(cat => cat.id === subcategory.category.id);
                        return {
                                category: category.name,
                                subcategory: subcategory.name
                        }

                } else {
                        return {
                                category: category.name
                        }
                }
        }

        console.log(findTypeName(categories, subCategories, params.category));
        return (
                <div>
                        <SubcategoryFilter subCategories={subCategories} />
                        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
        )
}

export default ProductList
