import React from 'react';
import {BsFillSuitHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET} from "../store/ActionTypes";
import AddButton from "../components/Basket/AddButton";


const ProductCard = ({el}) => {
    const {currency,allCurrencies} = useSelector(state => state.main)
    const
    dispatch = useDispatch()


    return (
        <div className="mx-5 my-10 w-[210px] pb-1 border-2 rounded-b-xl bg-teal-400 rounded-t-xl">
            <img src={el.image} alt="" width="210" className="rounded-t-xl"/>
            <h1 className="font-bold text-[14px] flex justify-center py-2 text-zinc-500">{el.title}</h1>
            <h1 className="flex justify-center font-serif text-sm text-zinc-500">{Math.round(el.price * allCurrencies[currency])} {currency}</h1>
            <p className="font-serif flex justify-center  text-[12px]">{el.description}</p>
            <AddButton el={el}/>
        </div>
    );
};

export default ProductCard;