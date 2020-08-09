import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import CategoriesList from "./CategoriesList";
import RightBar from "./RightBar";
import './style.scss'

const Header = () => {
    const dispatch = useDispatch();
    const categories = useSelector(({Categories}) => Categories.list);

    return (
        <div className='header'>
            <Link to='/'>
                <h1 className='header__logo'>Shkaff</h1>
            </Link>
            <CategoriesList list={categories}/>
            <RightBar/>
        </div>
    )
}

export default Header;
