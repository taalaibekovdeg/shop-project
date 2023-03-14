import React, {useState} from 'react';
import {CgCloseO} from "react-icons/cg"

const BasketImg = ({el}) => {
    const [button, setButton] = useState(true)
    return (
        <div>

            {/*<img src={el.image} alt="" width="30"*/}
            {/*     onClick={() => setButton(false)}*/}
            {/*/>*/}
            {/*<div*/}
            {/*    hidden={button}*/}
            {/*    className="fixed top-0 bottom-0 left-0 right-0 bg-black/80"*/}
            {/*    */}
            {/*/>*/}

            {/*<div*/}
            {/*    hidden={button}*/}
            {/*    className=" fixed left-[39%] top-[12%] w-[300px] rounded">*/}
            {/*    <img src={el.image} alt=""*/}
            {/*         className="rounded-2xl"*/}
            {/*    />*/}
            {/*    <h1*/}
            {/*        hidden={button}*/}
            {/*        onClick={() => setButton(true)}*/}
            {/*        className="absolute top-[1%] text-2xl right-[4%] cursor-pointer">X*/}
            {/*    </h1>*/}
            {/*</div>*/}

            <img src={el.image} alt="" width="30"
                 className="border"
            onClick={() => setButton(false)}
            />

            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/90"
                 hidden={button}
            />
            <div
                hidden={button}
                className="fixed w-[260px] top-20 rounded ml-[10px]">

                <img src={el.image} alt="" className="rounded border"/>

                <h1
                    hidden={button}
                    onClick={() => setButton(true)}
                    className="absolute text-[20px] top-2 right-2">
                    <CgCloseO/>
                </h1>

            </div>

        </div>
    );
};

export default BasketImg;