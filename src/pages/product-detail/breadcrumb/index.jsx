import React from "react";
import {Breadcrumb as MaterialBreadcrumb} from 'semantic-ui-react'
import {Link} from "react-router-dom";

import {toLowerCase} from "../../../utils";

const Breadcrumb = ({item: {category, subcategory, name}}) => {

    return (
        <MaterialBreadcrumb className='breadcrumb'>
            <Link to={'/'}>
                Головна
            </Link>
            <MaterialBreadcrumb.Divider/>
            <Link to={{pathname: toLowerCase(category.name), query: category}}>
                {category.name}
            </Link>
            <MaterialBreadcrumb.Divider/>
            <Link to={{pathname: toLowerCase(category.name), query: subcategory}}>
                {subcategory.name}
            </Link>
            <MaterialBreadcrumb.Divider/>
            <MaterialBreadcrumb.Section active>{name}</MaterialBreadcrumb.Section>
        </MaterialBreadcrumb>
    )
}

export default Breadcrumb
