import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import featuredProduct from "./reducers/featureProductReducer";
import newArrivalProduct from "./reducers/newArrivalProductReducer";


const rootReducer = combineReducers({
    featuredProduct: featuredProduct,
    newArrivalProduct: newArrivalProduct,
    cart: cartReducer
});

export default rootReducer;
