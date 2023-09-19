import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../components/products/Products';
import Detail from '../components/products/Detail';
import CheckOut from '../components/CheckOut/CheckOut';
import Sign from '../components/Sign';
import Register from '../components/Register';
import { SignLogic } from '../context/SignLogic';
import Profile from '../components/Profile';
import NotFound from '../components/NotFound';

const Public = ({ search }) => {
    const { isLogin } = useContext(SignLogic)
    return (
        <Routes>
            <Route path='/' element={<Products search={search} />} />
            <Route path='/product/:id' element={<Detail />} />
            <Route path='/sign-in' element={<Sign />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='*' element={<NotFound />} />
            {isLogin && <Route path='/profile' element={<Profile />} />}
        </Routes>
    );
}

export default Public;
