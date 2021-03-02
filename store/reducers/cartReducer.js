import { addItemToCart, removeCartItemQuantity } from "../actions/cart/cart.util"

const initialState = {
    hidden: true,
    cartItems: [],
}


 export  const cartReducer = (state= initialState, action ) => {
    switch(action.type){
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM_CART': 
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
        }
        case 'REMOVE_ITEM': 
        return {
            ...state,
            cartItems: removeCartItemQuantity(state.cartItems, action.payload)
        }

        case 'REMOVE_ITEM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }

            default:
            return state
    }
}