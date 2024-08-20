import React from 'react';
import a from "../../assets/mm/cover/1.avif";
import b from "../../assets/mm/cover/2.avif";

const Cover = () => {
    return (
        <div className='mt-1'>
            <img src={a} alt="" />
            <img src={b} alt="" />
        </div>
    );
};

export default Cover;