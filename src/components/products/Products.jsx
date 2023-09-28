import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api';
import Product from './Product';
import Filters from '../Filters';
const Products = ({ search }) => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('all');
    const [prices, setPrices] = useState('featured');

    useEffect(() => {
        const getProducts = async () => {
            const res = await getAllProducts()
            if (res) setProducts(res)
        }
        getProducts()
    }, [])

    const filteredProducts = products.filter(product => {
        if (category == 'all') {
            return product.title.toLowerCase().includes(search.toLowerCase())
        }
        return product.category === category && product.title.toLowerCase().includes(search.toLowerCase())
    })
    if (prices == 'low') {
        filteredProducts.sort((a, b) => a.price - b.price)
    } else if (prices == 'high') {
        filteredProducts.sort((a, b) => b.price - a.price)
    }
    return (
        <>
        <Filters setCategory={setCategory} setPrices={setPrices} />
        <div className='w-[60%] m-auto'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 pt-2 pb-10'>
                {filteredProducts.map(product => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Products;
