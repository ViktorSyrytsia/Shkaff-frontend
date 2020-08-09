import React from "react";
import { Search, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const RightBar = () => {

    return (
        <div className='header__right-bar'>
            <Search className='search'/>
            <Link to='/wishlist'>
                <Icon name='heart'/>
            </Link>
            <Link to='/cart'>
                <Icon name='cart'/>
            </Link>
        </div>
    )
}

export default RightBar;
