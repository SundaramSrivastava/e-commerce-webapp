import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        {cartItems.length ? (
            <div>
                <div className='cart-items'>
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT
                </CustomButton>
            </div>
        )
            :
            <div class="empty-message">"Your cart is Empty."</div>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps, null)(CartDropdown))