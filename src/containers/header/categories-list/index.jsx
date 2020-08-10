import React from "react";
import {Link} from "react-router-dom";
import {toLowerCase} from "../../../utils";

const CategoriesList = ({list}) => {

    return (
        <ul className='header__categories-list'>
            {list.map(category => (
                <li key={category.id}>
                    <Link to={{pathname: toLowerCase(category.name), query: category}}>
                        {category.name}
                    </Link>
                    <ul className='header__subcategories-list'>
                        {category.subcategories.map(subcategory => (
                            <li key={subcategory.id}>
                                <Link to={{pathname: toLowerCase(category.name), query: subcategory}}>
                                    {subcategory.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default CategoriesList;
