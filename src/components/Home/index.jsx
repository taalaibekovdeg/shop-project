import React, {useEffect} from 'react';
import {allProducts} from "./data";
import {useDispatch, useSelector} from "react-redux";
import {BsFillSuitHeartFill} from "react-icons/bs"
import ProductCard from "../../Page/ProductCard";

const Home = () => {
    const dispatch = useDispatch()
    const product = useSelector(s => s.main.product)
    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload:allProducts})
    })

    return (
        <div className="Home">
            <div className="containers flex flex-wrap pt-6">
                {
                    product.map((el) => <ProductCard key={el.id} el={el}/>)
                }
            </div>
            
        </div>
    );
};

export default Home;