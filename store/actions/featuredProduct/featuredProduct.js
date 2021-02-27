import featured_product from "../../Data"
import { FETCH_FEATURED_PRODUCT_START, FETCH_FEATURED_PRODUCT_SUCCESS } from "./types"

export const getFeatureProduct = () => dispatch => {
    // get product fetch start 
    dispatch({
        type: FETCH_FEATURED_PRODUCT_START
    })
    //api call
    dispatch({
        type: FETCH_FEATURED_PRODUCT_SUCCESS,
        payload: featured_product
    }) //data request for dummy >> api call will be made later
}