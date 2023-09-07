import React from 'react';
import { amazonsvg } from '../assets/svgs/Icons';

const Footer = () => {
    return (
        <div className='bg-[#2d323e] text-white flex flex-col'>
            <div className='w-[70%] m-auto '>
                <div className='flex  flex-1 flex-wrap md:flex-nowrap sm:justify-between justify-center gap-14 pt-3'>
                    <div>
                        <h2 className='text-lg'>
                            Get to Know Us
                        </h2>
                        <ul>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg'>Make money with us</h2>
                        <ul>
                            <li>Sell more with Amazon</li>
                        </ul>
                    </div>
                    <div className='text-center sm:text-left'>
                        <h2 className='text-lg'>Amazon payment Products</h2>
                        <ul>
                            <li>Amazon Visa</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg'>Let Us Help You</h2>
                        <ul>
                            <li>Your Account</li>
                        </ul>
                    </div>
                </div>
                <div className='h-[0.1px] bg-slate-300 mt-4 mb-4'></div>
                <div className=' text-center  flex items-center justify-center '>
                    <p>{amazonsvg()}</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
