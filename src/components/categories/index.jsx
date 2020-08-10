import React from 'react';
import { useSelector } from "react-redux";
import CategoryItem from '../categoryItem';

import './style.scss';


const Categories = () => {

        const categories = useSelector(({ Categories }) => Categories.list);

        return (
                <div className="categories-container">
                        <div className="categories-container__main">
                                {categories.map((cat, idx) => {
                                        if (idx <= 1) {
                                                return (
                                                        <CategoryItem key={cat.id} content={cat} />
                                                )

                                        }
                                })}
                        </div>
                        <div className="categories-container__sub">
                                {categories.map((cat, idx) => {
                                        if (idx > 1) {
                                                return (
                                                        <CategoryItem key={cat.id} content={cat} />
                                                )

                                        }
                                })}
                        </div>
                </div>
        )
}

export default Categories
