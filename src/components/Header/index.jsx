import React from 'react';
import LOGO from "../../image/logo.jpg"
import {NavLink, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SET_CURRENCY} from "../../store/ActionTypes";
import {setCurrency} from "../../store/ActionCreators";
import * as events from "events";

const Header = () => {
    const dispatch = useDispatch()
   const {basket} = useSelector(s=>s.basket)
    const currency = useSelector(state => state.main.currency)



    const CURRENCIES = {
        $: "$",
        RUB: "RUB",
        SOM: "KGS",
        TENGE: "KZT",
        SUM: "UZS"


    }

    return (
        <div className="w-full bg-emerald-600">
            <div className="containers w-full flex items-center justify-between py-4">
                <Link to={"/"}>
                    <img src={LOGO} alt="" width="40" className="rounded-[50%]"/>
                </Link>
                <div className=" flex  header-nav">

                    <NavLink to={"/products"} className=" header-nav text-amber-500 text-[18px] font-bold">
                        Product
                    </NavLink>
                    <NavLink to={"/favorite"} className="text-amber-500 text-[18px] font-bold mx-6">
                        Favorite
                    </NavLink>
                    <NavLink to={"/basket"} className="flex  text-amber-500 text-[18px] font-bold">
                        Basket
                      <div className="mb-1">
                          {
                              basket.length !== 0 ?<h1 className="mx-1 border border-amber-600 px-2">{basket.length}</h1>: ""
                          }
                      </div>
                    </NavLink>
                </div>
                <select
                    onChange={(event) => dispatch(setCurrency(event))}
                        className="bg-gray-50 border border-gray-300 text-amber-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  font-bold border-0 outline-0 px-1 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-amber-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {
                        Object.keys(CURRENCIES).map(el => (
                            <option value={el} selected={CURRENCIES[el] === currency}>{CURRENCIES[el]}</option>
                        ))
                    }
                </select>

            </div>
        </div>
    );
};

export default Header;