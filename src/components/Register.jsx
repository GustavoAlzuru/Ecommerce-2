import React, { useState } from 'react';
import { amazonBlackSvg } from '../assets/svgs/Icons';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../api';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPass, setReEnterPass] = useState('')
    const [error, setError] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        setError('')
        setErrorPass('')
        if (password != reEnterPass) {
            setErrorPass('Passwords are not the same')
            return
        }
        e.preventDefault()
        const user = {
            name,
            email,
            password
        }
        const sendUser = await (userRegister(user))
        if (sendUser.error) {
            setError(sendUser.error)
        } else {
            navigate('/sign-in')
        }
    }
    return (
        <div className='py-5'>
            <Link className='flex w-full justify-center' to='/'>
                {amazonBlackSvg()}
            </Link>
            <form className=' rounded-lg mx-auto sm:w-[50%] md:w-[35%] lg:w-[350px] w-[90%] border-gray-400 p-6 border flex flex-col' onSubmit={handleSubmit}>
                <h2 className='text-black text-3xl mb-3'>Create your account</h2>

                {/* NAME  */}
                <p className=' font-semibold text-sm'>Your name</p>
                <input
                    type="text"
                    className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'
                    placeholder='First and last name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                {/* EMAIL */}
                <p className=' font-semibold text-sm'>Email</p>
                <input
                    type="email"
                    className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                {/* PASSWORD */}
                <p className=' font-semibold text-sm'>Password</p>
                <input
                    type="password"
                    className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'
                    placeholder='At least 6 characters'
                    minLength={6}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                {/* PASS RE ENTERED */}
                <p className=' font-semibold text-sm'>Re-enter password</p>
                <input
                    type="password"
                    className='h-7 p-2 text-sm border border-[#4b4b4b93] rounded-sm mb-3'
                    placeholder='At least 6 characters'
                    minLength={6}
                    onChange={(e) => setReEnterPass(e.target.value)}
                    value={reEnterPass}
                />
                <button className='bg-[#d7eb22] text-center w-full py-1 rounded-md text-sm'>Continue</button>
                {error && <p className='text-center text-sm text-red-700 font-semibold'>{error}</p>}
                {errorPass && <p className='text-center text-sm text-red-700 font-semibold'>{errorPass}</p>}
                <p className='text-xs py-3'>By continuing, you agree to Amazon Conditions of Use and Privacy Notice.</p>
                <div className='h-[0.1px] bg-slate-300'></div>
            </form>
            <div className='text-center py-3 text-sm text-[#2c2c2c]'>
                <h5>Already have an Account? <Link to='/sign-in' className='text-[#6b4fd1]'>Sign in</Link></h5>
            </div>
        </div>
    );
}

export default Register;
