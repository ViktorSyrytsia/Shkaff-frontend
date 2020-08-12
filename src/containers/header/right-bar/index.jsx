import React from "react";
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import { SearchBar, Wishlist } from '../../index'

const RightBar = () => {

    return (
        <div className='main-header__right-bar'>
            <SearchBar />
            <Wishlist />
            <Link to='/cart'>
                <Icon name='cart' />
            </Link>
        </div>
    )
}

export default RightBar;
