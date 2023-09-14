import React, { useContext, useState } from 'react';
import { amazonBlackSvg } from '../assets/svgs/Icons';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../api';
import { SignLogic } from '../context/SignLogic';

const Sign = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { setIsLogin, setUsername } = useContext(SignLogic)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        setError('')
        e.preventDefault()
        const user = {
            email,
            password
        }
        const dataUser = await userLogin(user)
        if (dataUser.error) {
            setError(dataUser.error)
        } else {
            setIsLogin(dataUser.token)
            setUsername(dataUser.username)
            navigate('/')
        }
    }
    return (
        <div className='py-5'>
            <div className='w-full flex justify-center'>
                <Link className='flex w-fit justify-center' to='/'>
                    {amazonBlackSvg()}
                </Link>
            </div>
            <form className=' rounded-lg mx-auto sm:w-[50%] md:w-[35%] lg:w-[350px] w-[90%] border-gray-400 p-6 border flex flex-col' onSubmit={handleSubmit}>
                <h2 className='text-black text-3xl mb-3'>Sign in</h2>
                <p className=' font-semibold text-sm'>Email</p>
                <input
                    type="email"
                    className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className=' font-semibold text-sm'>Password</p>
                <input
                    type="password"
                    className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-[#d7eb22] text-center w-full py-1 rounded-md text-sm'>Continue</button>
                <p className='text-xs py-3'>By continuing, you agree to Amazon Conditions of Use and Privacy Notice.</p>
                {error && <p className='text-center text-sm text-red-700 font-semibold'>{error}</p>}
                <div className='h-[0.1px] bg-slate-300'></div>
            </form>
            <div className='text-center py-3 text-xs text-[#2c2c2c]'>
                <h5>New to Amazon?</h5>
            </div>
            <Link className=' rounded-md mx-auto sm:w-[50%] md:w-[35%] lg:w-[350px] w-[90%] border-[#b3b3b3af]  border flex flex-col items-center py-1 hover:bg-[#b3b3b31e] text-sm' to='/register'>Create your Amazon account</Link>
        </div>
    );
}

export default Sign;
