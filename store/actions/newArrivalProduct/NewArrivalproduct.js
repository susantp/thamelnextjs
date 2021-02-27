import new_aarival from "../../newArrivalData"
import { FETCH_NEW_ARRIVAL_PRODUCT_START, FETCH_NEW_ARRIVAL_SUCCESS } from "./types"


export const getNewArrivalProduct = () => dispatch => {
    // get product fetch start 
    dispatch({
        type: FETCH_NEW_ARRIVAL_PRODUCT_START
    })
    //api call
    dispatch({
        type: FETCH_NEW_ARRIVAL_SUCCESS,
        payload: new_aarival
    }) //data request for dummy >> api call will be made later
}