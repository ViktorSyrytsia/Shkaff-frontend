import React from 'react';
import CategoryItem from '../categoryItem';

import './style.scss';


const categories = [
        { id: 1, name: "Чоловіки", image: "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg" },
        { id: 2, name: "Жінки", image: "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg" },
        { id: 3, name: "Діти", image: "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg" },
        { id: 4, name: "Для дому", image: "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg" }
]

const Categories = () => {
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
