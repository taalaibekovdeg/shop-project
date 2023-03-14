import React, {useState} from 'react';
import {FaArrowAltCircleLeft} from "react-icons/fa"
import {RiDeleteBin6Fill} from "react-icons/ri"
import {useDispatch} from "react-redux";
import {addToFavorites} from "../../store/ActionCreators";
// import {DELETE} from "../../store/ActionTypes";

const FavoriteList = ({el}) => {
    const [isScrolled, setIsScrolled] = useState(false)

    const dispatch = useDispatch()

    return (
            <li className="border flex items-center containers list-none relative overflow-hidden shadow-md text-xl my-1 cursor-pointer font-mono w-[600px]  rounded bg-amber-300">
                <div className="flex justify-between items-center rounded font-mono w-full py-1 px-4">
                    {el.title}
                    <div
                        onClick={() => setIsScrolled(!isScrolled)}
                        className={`text-1xl transition-all`}>
                        <FaArrowAltCircleLeft className={`${isScrolled ? "rotate-180":"rotate-0"} transition-all`}/>
                    </div>
                </div>
                <div
                    onClick={() => dispatch(addToFavorites(el))}
                    className={`${isScrolled ? "mr-[-100%]": "right-0"} text-black py-2 px-2 bg-red-500 rounded `}>
                    <RiDeleteBin6Fill/>
                </div>

            </li>
    );
};

export default FavoriteList;