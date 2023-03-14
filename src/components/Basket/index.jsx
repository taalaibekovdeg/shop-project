import React, {useEffect} from 'react';
import {RiDeleteBin6Fill} from "react-icons/ri"
import BasketTable from "./BasketTable";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(state => state.basket)

    return (
  <div className="containers">
      {
          basket.length > 0 ? <BasketTable/>
              :
              <Link to={"/products"}>
                  <div className="bg-amber-500 flex justify-center w-[150px] py-3 rounded ml-[40%] mt-[20px]">
                      ADD PRODUCT+
                  </div>
              </Link>
      }


  </div>


    );
};

export default Basket;