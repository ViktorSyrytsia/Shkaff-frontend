import React from 'react';
import {Button} from 'semantic-ui-react'

const Sizes = ({sizes, selectedSize, setSelectedSize, isSizeErrorVisible, setIsSizeErrorVisible}) => {
    const sizesArray = Object.keys(sizes);
    sizesArray.pop()

    const handleClick = (e, value) => {
        setSelectedSize(value)
        setIsSizeErrorVisible(false)
    }

    return (
        <div className={'sizes'}>
            <Button.Group>
                {
                    sizesArray.map(value => (
                        <Button onClick={(e) => handleClick(e, value)}
                                key={value}
                                disabled={!sizes[value]}
                                className={selectedSize === value ? 'sizes__selected' : ''}>
                            {value === 'oneSize' ? 'one size' : value}
                        </Button>
                    ))
                }
            </Button.Group>
            {isSizeErrorVisible && <div className='sizes__error'>Виберіть розмір</div>}
        </div>
    );
};

export default Sizes;
