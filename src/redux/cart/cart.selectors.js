import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.Hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
        )
)


// this selector calculates the total value of the cart
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0
        )
)