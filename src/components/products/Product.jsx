import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <ul key={product.id} className='border p-2 flex flex-col bg-white rounded-sm'>
            <img src={product.image} alt={`Picture of ${product.title}`} className='h-48 object-contain w-full cursor-pointer' onClick={() => handleClick(product.id)} />
            <p className='flex-1 hover:text-[#ff9900] cursor-pointer' onClick={() => handleClick(product.id)}>{product.title}</p>
            <p>$<span className='text-2xl text-teal-950'>{product.price}</span></p>
        </ul>
    );
}

export default Product;
