import React from 'react';
import {RiDeleteBin6Fill} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import BasketRow from "./BasketRow";

const BasketTable = () => {
      const {basket} = useSelector(state => state.basket)

    const {currency,allCurrencies} = useSelector(s => s.main)
    const currencyPrice = Math.round(basket.reduce((acc, el) => acc + el.price * el.quantity * allCurrencies[currency], 0))

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-fuchsia-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                image

                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                quantity
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Price

                            </div>
                        </th>
                        <th scope="col" className="px-2 py-3">
                            <span className="">delete</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        basket.map(el => <BasketRow el={el}/>)
                    }
                    </tbody>
                </table>

            </div>
            {
                basket.length !== 0 ?<h1 className="flex justify-center font-bold text-2xl">Total price:{currencyPrice}{currency}</h1>:""

            }
        </>
    );
};

export default BasketTable;