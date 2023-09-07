import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api';
import Product from './Product';
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const res = await getAllProducts()
            if (res) setProducts(res)
        }
        getProducts()
    }, [])
    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 w-[60%] m-auto pt-20 pb-10'>
            {products.map(product => (
                <Product product={product} key={product.id}/>
            ))}
        </div>
    )
}

export default Products;
