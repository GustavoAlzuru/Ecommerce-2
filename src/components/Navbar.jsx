import React, { useContext, useState } from 'react';
import { amazonLogo, searchIcon, cartIcon } from '../assets/svgs/Icons';
import { Link } from 'react-router-dom';
import { CartProd } from '../context/CartProd';
import { SignLogic } from '../context/SignLogic';

const Navbar = ({ handleOn, updateSearch, search }) => {
    const { cartProducts } = useContext(CartProd)
    const { isLogin, username, logOffUser } = useContext(SignLogic)
    const [open, setOpen] = useState(false)
    const handleCart = () => {
        handleOn()
    }
    const handleClick = () => {
        setOpen(!open)
    }
    const handleSignOut = () => {
        logOffUser()
    }
    const handleChange = (e) => {
        const newValue = e.target.value
        if (newValue.startsWith(' ')) return
        updateSearch(newValue)
    }
    return (
        isLogin ?
            (
                <div className='w-full bg-[#2d323e] flex items-center sm:pl-8 sm:pr-8 pl-2 pr-2 fixed top-0'>
                    <Link to='/' className=''>{amazonLogo()}</Link >
                    <div className='flex items-center sm:w-[800px]  flex-1 justify-center'>
                        <div className='bg-white rounded-sm sm:w-[400px] md:w-[600px] lg:w-[800px] w-[160px] flex'>
                            <input
                                type='text'
                                placeholder='Search Amazon'
                                className='w-full p-1 rounded-lg outline-none'
                                onChange={handleChange}
                                value={search}
                            />
                            <button className=' bg-[#ff990093] w-12 flex justify-center'>{searchIcon()}</button>
                        </div>
                    </div>
                    <div className='relative flex'>
                        <button className='ml-2' onClick={handleCart}>{cartIcon()}</button>
                        <span className='text-[#ff9900] text-base absolute left-7 top-2 ml-1 sm:inline-block hidden '>{cartProducts.length}</span>
                    </div>
                    <button className='text-white text-md hover:text-gray-300 sm:mx-3 mx-1' onClick={handleClick}>{username}</button>
                    {open &&
                        <div className='w-28 h-24 absolute bg-white text-black right-10 top-10 flex justify-center items-center p-2'>
                            <button className='border bg-[#f3ff46] pt-1 pb-1 pl-4 pr-4 rounded-3xl hover:bg-[#dde662]' onClick={handleSignOut}>Sign out</button>
                        </div>}
                </div>
            )
            :
            (
                <div className='w-full bg-[#2d323e] flex items-center sm:pl-8 sm:pr-8 pl-2 pr-2 fixed top-0'>
                    <Link to='/' className=''>{amazonLogo()}</Link >
                    <div className='flex items-center sm:w-[800px]  flex-1 justify-center'>
                        <div className='bg-white rounded-sm sm:w-[400px] md:w-[600px] lg:w-[800px] w-[160px] flex'>
                            <input
                                type='text'
                                placeholder='Search Amazon'
                                className='w-full p-1 rounded-lg outline-none'
                                onChange={handleChange}
                                value={search}
                            />
                            <button className=' bg-[#ff990093] w-12 flex justify-center'>{searchIcon()}</button>
                        </div>
                    </div>
                    <Link className='text-white text-md hover:text-gray-300 sm:mx-2 mx-1' to='/sign-in'>Sign In</Link>
                    <div className='relative flex'>
                        <button className='ml-2' onClick={handleCart}>{cartIcon()}</button>
                        <span className='text-[#ff9900] text-base absolute left-7 top-2 ml-1 sm:inline-block hidden '>{cartProducts.length}</span>
                    </div>
                </div>
            )
    )
}

export default Navbar;