import React from 'react';
import { Button } from 'semantic-ui-react'

const Sizes = ({sizes}) => {
    const sizesArray = Object.keys(sizes);
    sizesArray.pop()

    return (
        <Button.Group>
            {
                sizesArray.map( value => (
                    <Button key={value} disabled={!sizes[value]}>{value}</Button>
                ))
            }
        </Button.Group>
    );
};

export default Sizes;
