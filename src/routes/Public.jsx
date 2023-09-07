import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../components/products/Products';
import Detail from '../components/products/Detail';
import CheckOut from '../components/CheckOut/CheckOut';

const Public = () => {
    return (
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/product/:id' element={<Detail/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
    );
}

export default Public;
