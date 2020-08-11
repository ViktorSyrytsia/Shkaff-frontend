import React, { useEffect, useState } from 'react'
import { Card, Image, Rating, Button } from 'semantic-ui-react';

import './style.scss';

const ProductCard = ({ product }) => {

        const [rating, setRating] = useState(9);

        useEffect(() => {
                if (product && product.rating.length > 0) {
                        setRating(product.rating.reduce((a, b) => a + b, 0) / product.rating.length);
                }
        }, [product])

        return (
                <Card>
                        <Image src={product.images[0].link} wrapped ui={false} />
                        <Card.Content>
                                <Card.Content>
                                        <div className="product-card__name">
                                                {product.name}
                                        </div>
                                        <div className="product-card__price">
                                                {`Ціна: ${product.price} грн.`}
                                        </div>
                                </Card.Content>
                        </Card.Content>
                        <Card.Content extra>
                                <Rating maxRating={10} defaultRating={rating} icon='star' />
                        </Card.Content>
                        <Button color="black">Деталі</Button>
                </Card>

        )
}

export default ProductCard
