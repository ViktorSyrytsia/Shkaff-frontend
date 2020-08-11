import React from "react";
import {Button, Icon} from 'semantic-ui-react'

import Breadcrumb from './breadcrumb'
import ImageViewer from './image-viewer'
import Sizes from './sizes'

import './style.scss'

const ProductDetailPage = ({item}) => {

    const onAddToWishlist = (e) => {

    }

    return (
        <div className='product-detail'>
            <Breadcrumb item={item}/>
            <div className='product-detail__item'>
                <ImageViewer images={item.images}/>
                <div className='product-detail__item__description'>
                    <h1>{item.name}</h1>
                    <div className={'price'}>{item.price} UAH</div>
                    <pre dangerouslySetInnerHTML={{__html: item.description}}/>
                    <Sizes sizes={item.sizes}/>
                    <div className='to-order'>
                        <Button size='big' color='black'>Купити</Button>
                        <Icon name='heart outline' onClick={onAddToWishlist}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
