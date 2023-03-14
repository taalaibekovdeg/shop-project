import {ADD_TO_BASKET, ADD_TO_FAVORITES, DECREASE, DELETE, GET_PRODUCT, SET_CURRENCY} from "../ActionTypes";
import favorite from "../../components/Favorite";


const initialState = {
    product: [],


    currency : JSON.parse(localStorage.getItem("currency")),
    allCurrencies: {
        $: 0.011,
        SOM: 1,
        RUB: 0.87,
        SUM: 130,
        TENGE: 5.02
    }
}

export const MainReducer = (state = initialState, action) => {
     switch (action.type){
         case GET_PRODUCT:{
             return {...state,product: action.payload}
         }


         case SET_CURRENCY: {
             return {...state,currency: action.payload}
         }

         default: {
             return state
         }
     }
}
