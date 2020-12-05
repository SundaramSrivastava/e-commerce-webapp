import { cartActionTypes } from "./cart.types";
import { addItemToCart, clearItem, removeItem } from "./cart.utils";

const INITAL_STATE = {
  Hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        Hidden: !state.Hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
