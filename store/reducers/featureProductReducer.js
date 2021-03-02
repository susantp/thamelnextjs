import { FETCH_FEATURED_PRODUCT_FAILURE, FETCH_FEATURED_PRODUCT_START, FETCH_FEATURED_PRODUCT_SUCCESS } from "../actions/featuredProduct/types"

const initialState = {
featuredProduct: [],
isLoading: false,
errorMsg: ""
}

const featuredProduct = (state = initialState, actions) => {
    switch(actions.type) {
        case FETCH_FEATURED_PRODUCT_START:
        return {
            ...state,
            isLoading: true
        }
        case FETCH_FEATURED_PRODUCT_SUCCESS: 
        return {
            ...state,
            isLoading: false,
            featuredProduct: actions.payload
        }
        case FETCH_FEATURED_PRODUCT_FAILURE: 
        return {
            ...state,
            isLoading: false,
            errorMsg: actions.payload
        }
        default:
            return state
    }
}

export default featuredProduct