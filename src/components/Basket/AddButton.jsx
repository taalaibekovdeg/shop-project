import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET, ADD_TO_FAVORITES} from "../../store/ActionTypes";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import AddToFavoritesBtn from "../ui/addToFavoritesBtn"
import {addToBasket} from "../../store/ActionCreators";
import {addToFavorites} from "../../store/ActionCreators";

const AddButton = ({el}) => {
    const [button, setButton] = useState(true)
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state.basket)
    const found = basket.find(f => f.id === el.id)
    const {favorite} = useSelector(state => state.favorite)
    const founded = favorite.some(f => f.id === el.id)





    return (
        <div className="flex justify-center my-2">
            {

                    found ?
                    <AddToFavoritesBtn/>
                    :
                    <button type="button"
                            onClick={() => dispatch(addToBasket(el))}
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-[11px] px-2 py-2 text-center mr-2 mb-2">
                        Добавить в корзину
                    </button>



            }
            <button type="button"

                    onClick={()  => dispatch(addToFavorites(el) ) }
                    className={`${founded ? "text-red-700": "text-white"} bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2`}>
                <BsFillSuitHeartFill/>
            </button>
        </div>
    );
};

export default AddButton;