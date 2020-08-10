import React from "react";

import Breadcrumb from './breadcrumb'
import ImageViewer from './image-viewer'

import './style.scss'

const ProductDetailPage = ({item}) => {
    return (
        <div className='product-detail'>
            <Breadcrumb/>
            <div className='product-detail__item'>
                <ImageViewer images={item.images}/>
            </div>
        </div>
    )
}

export default ProductDetailPage
