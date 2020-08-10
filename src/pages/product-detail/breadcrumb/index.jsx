import React from "react";
import { Breadcrumb as MaterialBreadcrumb } from 'semantic-ui-react'

const Breadcrumb = () => {
    return (
            <MaterialBreadcrumb className='breadcrumb'>
                <MaterialBreadcrumb.Section link>Home</MaterialBreadcrumb.Section>
                <MaterialBreadcrumb.Divider />
                <MaterialBreadcrumb.Section link>Store</MaterialBreadcrumb.Section>
                <MaterialBreadcrumb.Divider />
                <MaterialBreadcrumb.Section active>T-Shirt</MaterialBreadcrumb.Section>
            </MaterialBreadcrumb>
    )
}

export default Breadcrumb
