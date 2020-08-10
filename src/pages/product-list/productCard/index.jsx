import React from 'react'
import { Card, Image, Rating, Button } from 'semantic-ui-react';
const product = {
        _id: '213123sdasd12',
        images: [],
        rating: [],
        name: 'Test product name',
        price: 1992,
        description: 'Hello, here must be some description text',
        sizes: { xs: 2, s: 0, m: 1, l: 1, xl: 0, xxl: 0 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

const ProductCard = ({ product }) => {
        return (
                <Card>
                        <Image src={product.images[0].link} wrapped ui={false} />
                        <Card.Content>
                                <Card.Header>{product.name}</Card.Header>
                                <Card.Meta>
                                        <span className='date'>{product.price}</span>
                                </Card.Meta>
                                <Card.Description>
                                        {product.description}
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
