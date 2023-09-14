import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../components/products/Products';
import Detail from '../components/products/Detail';
import CheckOut from '../components/CheckOut/CheckOut';
import Sign from '../components/Sign';
import Register from '../components/Register';

const Public = ({ search }) => {
    return (
        <Routes>
            <Route path='/' element={<Products search={search}/>} />
            <Route path='/product/:id' element={<Detail />} />
            <Route path='/sign-in' element={<Sign />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<CheckOut />} />
        </Routes>
    );
}

export default Public;
