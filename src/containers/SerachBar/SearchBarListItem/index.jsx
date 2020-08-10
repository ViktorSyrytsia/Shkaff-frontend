import React, {useState} from "react";
import {Link} from "react-router-dom";

import {toLowerCase} from '../../../utils'

const SearchBarListItem = ({item}) => {

    const linkGenerator = ({id, name, category, subcategory, __typename}) => {
        switch (__typename) {
            case 'Category':
                return `/${toLowerCase(name)}`
            case 'Subcategory':
                return `/${toLowerCase(category.name)}/${toLowerCase(name)}`
            case 'Product':
                return `/${toLowerCase(category.name)}/${toLowerCase(subcategory.name)}/${id}`
            default:
                return 'someLink'
        }
    }

    const itemGenerator = ({name, category, subcategory,  __typename, price}) => {
        switch (__typename) {
            case 'Category':
                return (
                    <div className='search-item'>
                        <h4>{name}</h4>
                        <span>в категоріях</span>
                    </div>
                )
            case 'Subcategory':
                return (
                    <div className='search-item'>
                        <h4>{name}</h4>
                        <span>в {category.name}</span>
                    </div>
                )
            case 'Product':
                return (
                    <div className='search-item'>
                        <h4>{name}</h4>
                        <span className='price'>{price} UAH</span>
                        <span>в {category.name}, {subcategory.name}</span>
                    </div>
                )
            default:
                return 'someLink'
        }
    }

    return (
        <li>
            <Link to={linkGenerator(item)}>
                {itemGenerator(item)}
            </Link>
        </li>
    )
}

export default SearchBarListItem
