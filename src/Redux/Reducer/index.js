import { combineReducers } from "redux";

import {selectProductReducer, productStore} from "./ProductReducer";


export const reducer = combineReducers(
    {   
        productStore,
        selectProductReducer
    }
)

