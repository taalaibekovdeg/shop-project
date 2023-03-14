import React from 'react';
import {useSelector} from "react-redux";
import FavoriteList from "./FavoriteList";




const Favorite = () => {
    const favorite = useSelector(state => state.favorite.favorite)
    return (
        <ul className="w-[600px]  ml-[23%] mt-10">
            {
                favorite.map(el => <FavoriteList el={el}/>)
            }
        </ul>
    );
};

export default Favorite;