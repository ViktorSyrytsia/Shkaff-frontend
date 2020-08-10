import React from 'react';
import { useSelector } from "react-redux";
import CategoryItem from '../categoryItem';

import './style.scss';
import { Link } from 'react-router-dom';


const Categories = () => {

        const categories = useSelector(({ Categories }) => Categories.list);

        return (
                <div className="categories-container">
                        <div className="categories-container__main">
                                {categories.map((cat, idx) => {
                                        if (idx <= 1) {
                                                return (
                                                        <Link className="link" key={cat.id} to={cat.name}>
                                                                <CategoryItem content={cat} />
                                                        </Link>
                                                )

                                        }
                                })}
                        </div>
                        <div className="categories-container__sub">
                                {categories.map((cat, idx) => {
                                        if (idx > 1) {
                                                return (
                                                        <Link className="link" key={cat.id} to={cat.name}>
                                                                <CategoryItem content={cat} />
                                                        </Link>
                                                )
                                        }
                                })}
                        </div>
                </div>
        )
}

export default Categories
