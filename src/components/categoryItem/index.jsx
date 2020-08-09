import React from 'react';

import './style.scss';



const CategoryItem = ({ content }) => {

        let styles = {
                backgroundImage: `url(${content.image})`
        }

        return (
                <div style={styles} className="categoryItem__container">
                        <div className="categoryItem__container-shader">

                        </div>
                        <div className="categoryItem__container__title">{content.name}</div>
                </div>
        )
}

export default CategoryItem
