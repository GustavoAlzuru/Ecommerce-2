import React, { useContext } from 'react';
import { amazonLogo, searchIcon, cartIcon } from '../assets/svgs/Icons';
import { Link } from 'react-router-dom';
import { CartProd } from '../context/CartProd';

const Navbar = ({ handleOn }) => {
    const { cartProducts } = useContext(CartProd)
    const handleCart = () => {
        handleOn()
    }
    return (
        <div className='w-full bg-[#2d323e] flex items-center pl-8 pr-8 fixed top-0'>
            <Link to='/' className=''>{amazonLogo()}</Link >
            <div className='flex items-center sm:w-[800px]  flex-1 justify-center'>
                <div className='bg-white rounded-sm sm:w-[400px] md:w-[600px] lg:w-[800px] w-[180px] flex'>
                    <input
                        type='text'
                        placeholder='Search Amazon'
                        className='w-full p-1 rounded-lg outline-none'
                    />
                    <button className=' bg-[#ff990093] w-12 flex justify-center'>{searchIcon()}</button>
                </div>
            </div>
            <button className='ml-2' onClick={handleCart}>{cartIcon()}</button>
            <span className='text-[#ff9900] text-lg ml-1 '>{cartProducts.length}</span>
        </div>
    );
}

export default Navbar;