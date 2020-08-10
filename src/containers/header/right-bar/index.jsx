import React from "react";
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import { SearchBar } from '../../index'

const RightBar = () => {

    return (
        <div className='header__right-bar'>
            <SearchBar />
            <Link to='/wishlist'>
                <Icon name='heart' />
            </Link>
            <Link to='/cart'>
                <Icon name='cart' />
            </Link>
        </div>
    )
}

export default RightBar;
