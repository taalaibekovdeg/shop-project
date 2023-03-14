import React from 'react';
import {RiDeleteBin6Fill} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET, DECREASE, DELETE} from "../../store/ActionTypes";
import {HiOutlinePlusCircle, HiOutlineMinusCircle} from "react-icons/hi"
import BasketImg from "./BasketImg";
import {AddToDelete} from "../../store/ActionCreators";
import {addDecrease} from "../../store/ActionCreators";
import {AddPlus} from "../../store/ActionCreators";

const BasketRow = ({el}) => {
    const {currency, allCurrencies} = useSelector(state => state.main)

    const dispatch = useDispatch()



    const addCurrency = Math.round(el.price * el.quantity * allCurrencies[currency])




    return (
        <tr className="border-x-green-100 border-b dark:bg-fuchsia-200 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                <h1>{el.title}</h1>
            </th>
            <td className="px-6 py-4">
                <BasketImg el={el}/>
            </td>
            <td className="px-6 py-4">
                <h1 className="font-bold flex items-center w-[90px] ]">
                    <HiOutlineMinusCircle
                        onClick={() => dispatch(addDecrease(el.id))}
                        className={`  mx-1 text-[19px] ${el.quantity > 1 ? "disabled:": "text-blue-500"}`}/>
                    {el.quantity}
                    <HiOutlinePlusCircle
                        onClick={() => dispatch( AddPlus(el))}
                        className="mx-1 text-[19px] te"/>
                </h1>
            </td>
            <td className="px-6 py-4 ]">
                <h1 className="font-bold">{addCurrency} {currency}</h1>
            </td>
            <td className="px-5 py-4 text-right text-[20px]"
                onClick={() => dispatch(AddToDelete(el))}
            >
                <RiDeleteBin6Fill/>
            </td>
        </tr>
    );
};

export default BasketRow;