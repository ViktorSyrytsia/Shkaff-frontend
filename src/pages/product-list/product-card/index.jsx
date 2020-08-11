import React, { useEffect, useState } from 'react'
import { Card, Image, Rating, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import { linkGenerator } from "../../../utils";

import './style.scss';

const ProductCard = ({ product }) => {

        const [rating, setRating] = useState(10);

        useEffect(() => {

                if (product && product.rating.length > 0) {
                        setRating(product.rating.reduce((a, b) => a + b.value, 0) / product.rating.length);
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
                                <div className="rating-bar">
                                        <div className="rating-bar__text">Рейтинг:</div>
                                        <div className="rating-bar__rate">{`${rating.toFixed(1)}/10`}</div>
                                </div>
                        </Card.Content>
                        <Button color="black">
                                <Link to={{ pathname: linkGenerator(product), query: product }}>
                                        Деталі
                </Link>
                        </Button>
                </Card>

        )
}

export default ProductCard
