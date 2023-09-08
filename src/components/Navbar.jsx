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
        <div className='w-full bg-[#2d323e] flex items-center sm:pl-8 sm:pr-8 pl-2 pr-2 fixed top-0'>
            <Link to='/' className=''>{amazonLogo()}</Link >
            <div className='flex items-center sm:w-[800px]  flex-1 justify-center'>
                <div className='bg-white rounded-sm sm:w-[400px] md:w-[600px] lg:w-[800px] w-[160px] flex'>
                    <input
                        type='text'
                        placeholder='Search Amazon'
                        className='w-full p-1 rounded-lg outline-none'
                    />
                    <button className=' bg-[#ff990093] w-12 flex justify-center'>{searchIcon()}</button>
                </div>
            </div>
            <Link className='text-white text-md hover:text-gray-300 sm:mx-2 mx-1' to='/sign-in'>Sign In</Link>
            <button className='ml-2' onClick={handleCart}>{cartIcon()}</button>
            <span className='text-[#ff9900] text-lg ml-1 sm:inline-block hidden'>{cartProducts.length}</span>
        </div>
    );
}

export default Navbar;