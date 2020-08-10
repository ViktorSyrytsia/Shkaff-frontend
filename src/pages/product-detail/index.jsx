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
                <div className='product-detail__item__description'>
                    <h1>{item.name}</h1>
                    <div className={'price'}>{item.price} UAH</div>
                    <div dangerouslySetInnerHTML={{__html: item.description}}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
