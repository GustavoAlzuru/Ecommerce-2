import React, { useContext, useState } from 'react';
import { amazonLogo, searchIcon, cartIcon, profile, logOffIcon, userIcon } from '../assets/svgs/Icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartProd } from '../context/CartProd';
import { SignLogic } from '../context/SignLogic';

const Navbar = ({ handleOn, updateSearch, search }) => {
    const { cartProducts } = useContext(CartProd)
    const { isLogin, username, logOffUser } = useContext(SignLogic)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleCart = () => {
        handleOn()
    }
    const handleClick = () => {
        setOpen(!open)
    }
    const handleSignOut = () => {
        logOffUser()
        navigate('/')
    }
    const handleChange = (e) => {
        const newValue = e.target.value
        if (newValue.startsWith(' ')) return
        updateSearch(newValue)
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
                        onChange={handleChange}
                        value={search}
                    />
                    <button className=' bg-[#ff990093] w-12 flex justify-center'>{searchIcon()}</button>
                </div>
            </div>
            {isLogin ?
                <>
                    <div className='relative flex'>
                        <button className='ml-2' onClick={handleCart}>{cartIcon()}</button>
                        <span className='text-[#ff9900] text-base absolute left-7 top-2 ml-1 sm:inline-block hidden '>{cartProducts.length}</span>
                    </div>
                    <button className='text-white text-md hover:text-gray-300 sm:mx-5 mx-1' onClick={handleClick}>{profile()}</button>
                    {open &&
                        <div className='w-40 h-24 absolute bg-white text-black right-16 top-11 flex justify-center p-4 rounded-lg flex-col'>
                            <div className='flex gap-2'>
                                <span>{logOffIcon()}</span>
                                <button className='text-[#000000] hover:scale-105 transition duration-150 ease-in-out' onClick={handleSignOut}>Sign out</button>
                            </div>
                            <div className='flex gap-2'>
                                <span>{userIcon()}</span>
                                <Link className='text-[#3930c5] hover:scale-105 transition duration-150 ease-in-out' to='/profile'>My Account</Link>
                            </div>
                        </div>}
                </>
                :
                <>
                    <Link className='text-white text-md hover:text-gray-300 sm:mx-2 mx-1' to='/sign-in'>Sign In</Link>
                    <div className='relative flex'>
                        <button className='ml-2' onClick={handleCart}>{cartIcon()}</button>
                        <span className='text-[#ff9900] text-base absolute left-7 top-2 ml-1 sm:inline-block hidden '>{cartProducts.length}</span>
                    </div>
                </>
            }

        </div>

    )
}

export default Navbar;

