export const toggleCart = () => ({
    type: 'TOGGLE_CART'
})


export const addItemCart = item => ({
    type: 'ADD_ITEM_CART',
    payload: item
})

export const removeItemCart = item => ({
    type: 'REMOVE_ITEM_CART',
    payload: item
})

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})