import React from 'react'
import { Card, Image, Rating, Button } from 'semantic-ui-react';

const ProductCard = ({ product }) => {
        return (
                <Card>
                        <Image src={product.images[0].link} wrapped ui={false} />
                        <Card.Content>
                                <Card.Meta>
                                        <span className='date'>{product.price}</span>
                                </Card.Meta>
                                <Card.Description>
                                        {product.name}
                                </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                                <Rating maxRating={5} defaultRating={3} icon='star' />
                        </Card.Content>
                        <Button>Купити</Button>
                </Card>

        )
}

export default ProductCard
