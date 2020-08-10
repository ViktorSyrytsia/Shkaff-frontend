import React from 'react';

import './style.scss';



const CategoryItem = ({ content }) => {

        const containerCoverImage = {
                backgroundImage: `url(${content.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
        }

        const colorFunc = (content, option) => {
                switch (content.name) {
                        case 'Жінкам':
                                return {
                                        [option]: '#674794'
                                }
                        case 'Чоловікам':
                                return {
                                        [option]: '#ea3f34'
                                }
                        case 'Дітям':
                                return {
                                        [option]: '#f2982c'
                                }
                        case 'Для дому':
                                return {
                                        [option]: '#52a360'
                                }
                        default:
                                return {
                                        [option]: 'white'
                                };
                }
        }

        return (
                <div style={containerCoverImage} className="categoryItem__container">
                        <div style={colorFunc(content, 'backgroundColor')} className="categoryItem__container-shader">

                        </div>
                        <div style={colorFunc(content, 'borderBottomColor')} className="categoryItem__container__title">{content.name}</div>
                </div>
        )
}

export default CategoryItem
