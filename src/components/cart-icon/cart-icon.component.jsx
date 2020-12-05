import React from 'react';
import { connect } from "react-redux";
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'

import { ReactComponent as ShoppingBagIcon } from './../../assets/shopping-bag.svg'
import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden,itemCount}) =>  (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingBagIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
