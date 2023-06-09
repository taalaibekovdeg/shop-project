import React from 'react';
import {Link} from "react-router-dom";

const AddToFavoritesBtn = () => {
    return (
        <div>
            <Link to={"/basket"}>
                <button type="button"
                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-[11px] px-2.5 py-2 text-center mr-2 mb-2">
                    Перейти в корзину
                </button>
            </Link>
        </div>
    );
};

export default AddToFavoritesBtn;