import {ADD_TO_BASKET, ADD_TO_FAVORITES, DECREASE, DELETE, SET_CURRENCY} from "./ActionTypes";
import basket from "../components/Basket";


// Basket//
export const addToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []

    const found = basket.some(el => el.id === product.id)
    if (found){
        basket = basket.map(b=> b.id === product.id ? {...b,quantity : b.quantity+1} : b)
    }else {
        basket = [...basket,{...product,quantity:1}]
    }

    localStorage.setItem("basket",JSON.stringify(basket))
    return {type:ADD_TO_BASKET, payload:product}
}
export const AddToDelete = (product) => {
     let basket = JSON.parse(localStorage.getItem("basket")) || []

     const resolve = basket.filter(el => el.id !== product.id)

    localStorage.setItem("basket", JSON.stringify(resolve))

    return {type: DELETE, payload: product}
}
 export const addDecrease = (id) => {
     let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.map(b=> b.id === id ? {...b,quantity:b.quantity-1}: b)
     localStorage.setItem("basket",JSON.stringify(basket))
     return {type:DECREASE, payload:id}
}
export const AddPlus = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
   const found = basket.some(el => el.id === product.id)
    if (found){
        basket = basket.map(b=> b.id === product.id ? {...b,quantity : b.quantity+1} : b)
    }else {
        basket = [...basket,{...product,quantity:1}]
    }
    localStorage.setItem("basket",JSON.stringify(basket))

    return {type: ADD_TO_BASKET, payload:product}
}


// Favorites//
export const addToFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []
    let found = favorites.some(el => el.id === product.id)
    if (found){
        favorites = favorites.filter(el => el.id !==product.id)
    }else {
        favorites.push(product)
    }
    localStorage.setItem("favorites",JSON.stringify(favorites))
    return {type:ADD_TO_FAVORITES,payload:product}
}



export const setCurrency = (e) => {
    localStorage.setItem("currency",JSON.stringify(e.target.value))
    return {type: SET_CURRENCY,payload:e.target.value}
}