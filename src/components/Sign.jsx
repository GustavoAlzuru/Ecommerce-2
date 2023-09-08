import React from 'react';
import { amazonBlackSvg } from '../assets/svgs/Icons';
import { Link } from 'react-router-dom';

const Sign = () => {
    return (
        <div className='py-5'>
            <Link className='flex w-full justify-center' to='/'>
                {amazonBlackSvg()}
            </Link>
            <div className=' rounded-lg mx-auto sm:w-[50%] md:w-[35%] lg:w-[350px] w-[90%] border-gray-400 p-6 border flex flex-col'>
                <h2 className='text-black text-3xl mb-3'>Sign in</h2>
                <p className=' font-semibold text-sm'>Email</p>
                <input type="email" className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'/>
                <p className=' font-semibold text-sm'>Password</p>
                <input type="password" className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'/>
                <button className='bg-[#d7eb22] text-center w-full py-1 rounded-md text-sm'>Continue</button>
                <p className='text-xs py-3'>By continuing, you agree to Amazon Conditions of Use and Privacy Notice.</p>
                <div className='h-[0.1px] bg-slate-300'></div>
            </div>
            <div className='text-center py-3 text-xs text-[#2c2c2c]'>
                <h5>New to Amazon?</h5>
            </div>
            <button className=' rounded-md mx-auto sm:w-[50%] md:w-[35%] lg:w-[350px] w-[90%] border-[#b3b3b3af]  border flex flex-col items-center py-1 hover:bg-[#b3b3b31e] text-sm'>Create your Amazon account</button>
        </div>
    );
}

export default Sign;
