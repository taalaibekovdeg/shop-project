import {ADD_TO_BASKET, DECREASE, DELETE} from "../ActionTypes";


const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
}

export const BasketReducer = (state = initialState,action) => {
         switch (action.type){
             case ADD_TO_BASKET:
                 const founded = state .basket.find(el => el.id === action.payload.id)
                 if (founded){
                     return {...state,basket: state.basket.map(el=> el.id === founded.id ? {...el,quantity: el.quantity +1}: el
                         )}
                 }
                 return {...state,basket: [...state.basket, {...action.payload, quantity :1}]}
             case DELETE : {
                 return {...state,basket: state.basket.filter(el => el.id !== action.payload.id)}
             }
             case DECREASE : {
                 return {...state,basket: state.basket.map(el =>{
                         if ( el.id === action.payload && el.quantity > 1){
                             return {...el, quantity: el.quantity - 1}
                         } else{
                             return el
                         }

                     })}
             }

             default:
                 return state
         }
}