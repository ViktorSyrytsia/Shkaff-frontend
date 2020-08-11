import React, {useEffect, useState} from "react";
import {Button, Icon} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";

import {addItemToWishlist, removeItemFromWishlist} from "../../redux/wishlist/wishlist.actions";
import Breadcrumb from './breadcrumb'
import ImageViewer from './image-viewer'
import Sizes from './sizes'

import './style.scss'

const ProductDetailPage = ({product}) => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector(({Wishlist}) => Wishlist.list)

    const [isItemInWishlist, setIsItemInWishlist] = useState(false)

    const onAddToWishlist = () => {
        if (isItemInWishlist) {
            dispatch(removeItemFromWishlist(product))
            setIsItemInWishlist(false)
        } else {
            dispatch(addItemToWishlist(product))
            setIsItemInWishlist(true)
        }
    }

    useEffect(() => {
        if (wishlistItems.length ) {
            console.log(wishlistItems[0].id)
            console.log(product.id)
        }
        console.log('wishlist', wishlistItems)

        const checkedWishlistItem = wishlistItems.find(item => item.id === product.id)
        console.log(checkedWishlistItem)
        checkedWishlistItem && setIsItemInWishlist(true)
    }, [wishlistItems, isItemInWishlist])

    return (
        <div className='product-detail'>
            <Breadcrumb item={product}/>
            <div className='product-detail__item'>
                <ImageViewer images={product.images}/>
                <div className='product-detail__item__description'>
                    <h1>{product.name}</h1>
                    <div className={'price'}>{product.price} UAH</div>
                    <pre dangerouslySetInnerHTML={{__html: product.description}}/>
                    <Sizes sizes={product.sizes}/>
                    <div className='to-order'>
                        <Button size='big' color='black'>Купити</Button>
                        <Icon className={isItemInWishlist ? 'selected' : ''}
                              name={isItemInWishlist ? 'heart' : 'heart outline'}
                              onClick={onAddToWishlist}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
