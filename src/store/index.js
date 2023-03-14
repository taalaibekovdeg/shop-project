import {combineReducers, createStore} from "redux";
import {MainReducer} from "./Reducers/Reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "./Reducers/BasketReducer";
import {FavoriteReducer} from "./Reducers/FavoriteReducer";
const rootState = combineReducers ({
    main: MainReducer,
    basket: BasketReducer,
    favorite: FavoriteReducer
})
export const store = createStore(rootState,composeWithDevTools())