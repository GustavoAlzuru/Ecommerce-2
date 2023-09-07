import React, { useContext } from 'react';
import { amazonBlackSvg, padlock } from '../../assets/svgs/Icons';
import { Link } from 'react-router-dom';
import { CartProd } from '../../context/CartProd';

const OutNavBar = () => {
    const { cartProducts } = useContext(CartProd)
    return (
        <div className='bg-gray-300 flex justify-between min-h-[128px] items-center pl-10 pr-10 flex-wrap pt-2 pb-2'>
            <Link to='/'>{amazonBlackSvg()}</Link>
            <span className='sm:text-2xl text-xl'>CheckOut ({cartProducts.length} Items)</span>
            <span>{padlock()}</span>
        </div>
    );
}

export default OutNavBar;
