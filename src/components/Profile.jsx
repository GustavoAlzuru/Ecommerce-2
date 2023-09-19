import React, { useContext, useEffect, useState } from 'react';
import { userInfo } from '../api';
import { SignLogic } from '../context/SignLogic';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState({})
    const { isLogin } = useContext(SignLogic)
    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await userInfo(isLogin)
                if (data) setUser(data)
            } catch (err) {
                console.error(err)
            }
        }
        getUser()
    }, [])
    return (
        <div className='sm:w-[60%] w-[90%] mx-auto mt-24 bg-white h-56 p-8 rounded-md'>
            <Link to='/' className='text-blue-600'>&lt; back</Link>
            <div className='flex items-center gap-4'>
                <h3 className='text-2xl'>Username: </h3>
                <span className='text-lg'>{user[0]?.name}</span>
            </div>
            <div className='flex items-center gap-4'>
                <h3 className='text-2xl'>Email: </h3>
                <span className='text-lg'>{user[0]?.email}</span>
            </div>
        </div>
    );
}

export default Profile;
