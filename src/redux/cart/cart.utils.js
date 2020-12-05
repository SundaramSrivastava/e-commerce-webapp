const changeItemQuantityValue = ( cartItems, itemToChange, byValue ) => (
    cartItems.map(cartItem =>
        cartItem.id === itemToChange.id ?
            {...cartItem, quantity: cartItem.quantity + byValue}
            :
            cartItem
    )
)

const findExistingItemInCart = (cartItems, cartItemToFind) => cartItems.find(
    cartItem => cartItem.id === cartItemToFind.id
)

export const clearItem = ( cartItems, itemToRemove ) => cartItems.filter( item => item.id !== itemToRemove.id )

export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = findExistingItemInCart(cartItems, cartItemToAdd) 

    if (existingCartItem) return changeItemQuantityValue(cartItems, cartItemToAdd, 1)

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItem = ( cartItems, itemToRemove ) => {
    const existingCartItem = findExistingItemInCart( cartItems, itemToRemove )
    
    if( existingCartItem.quantity === 1 ) return clearItem(cartItems, existingCartItem)
        
    return changeItemQuantityValue( cartItems, itemToRemove, -1)
}