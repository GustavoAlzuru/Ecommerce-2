import React, { useContext } from 'react';
import { amazonBlackSvg, padlock } from '../../assets/svgs/Icons';
import { Link } from 'react-router-dom';
import { CartProd } from '../../context/CartProd';

const OutNavBar = () => {
    const { cartProducts } = useContext(CartProd)
    return (
        <div className='bg-gray-300 flex justify-between h-32 items-center pl-10 pr-10'>
            <Link to='/'>{amazonBlackSvg()}</Link>
            <span className='text-2xl'>CheckOut ({cartProducts.length} Items)</span>
            <span>{padlock()}</span>
        </div>
    );
}

export default OutNavBar;
