
import React from 'react'

import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer
} from './cart-item.styles'

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer className='cart-item'>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer className='item-details'>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default cartItem