import React from "react";
import {Link} from "react-router-dom";
import {toLowerCase} from "../../../utils";

const CategoriesList = ({list}) => {

    return (
        <ul className='header__categories-list'>
            {list.map(item => (
                <li key={item.id}>
                    <Link to={`/${toLowerCase(item.name)}`}>
                        {item.name}
                    </Link>
                    <ul className='header__subcategories-list'>
                        {item.subcategories.map(subcategory => (
                            <li key={subcategory.id}>
                                <Link to={`/${toLowerCase(item.name)}`}>
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
