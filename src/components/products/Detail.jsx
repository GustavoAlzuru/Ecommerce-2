import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleProduct } from '../../api';
import { CartProd } from '../../context/CartProd';
import useQuantity from '../../hooks/useQuantity';

const Detail = () => {
    const { id } = useParams()
    const { cartProducts, setCartProducts } = useContext(CartProd)
    const { quantity, handleQuantityChange } = useQuantity(1);
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            const data = await getSingleProduct(id)
            if (data) setProduct(data)
        }
        getProduct()
    }, [id])
    const handleProductCart = (prod) => {
        // Check if the item is already in the cart
        const isItemInCart = cartProducts.some((cartItem) => cartItem.id === prod.id);

        if (isItemInCart) {
            // Item is already in the cart, you can handle it here (e.g., show a message)
            console.log('Item is already in the cart');
        } else {
            // Item is not in the cart, add it with a quantity 
            const newItem = { ...prod, quantity: quantity };
            setCartProducts([...cartProducts, newItem]);
        }
    }
    const returnStars = (rate) => {
        const rating = Math.round(parseInt(rate))
        return Array(Math.round(rating)).fill('⭐')
    }
    return (
        <div className='w-[50%] m-auto pt-20 pb-4'>
            <div>
                <Link to='/' className="text-blue-600"> &lt; back to results</Link>
            </div>

            {/* Two columns in the second row */}
            <div className="mt-10  flex-col md:flex-row flex gap-10 justify-center">
                <div>
                    <img src={product.image} alt={`Picture of ${product.title}`} className='w-96' />
                </div>
                <div className='sm:w-72 w-50 flex flex-col gap-1'>
                    <h3 className='sm:text-3xl text-xl'>{product.title}</h3>
                    <span>{product?.rating?.rate} {product?.rating?.rate && returnStars(product?.rating?.rate).map((item, index) => <span key={index}>{item}</span>)}</span>
                    <div className='h-[0.1px] bg-slate-300'></div>
                    <span>Price: <span className='text-xl text-[#b92e2e]'>${product.price}</span></span>
                    <div className='h-[0.1px] bg-slate-300'></div>
                    <p>{product.description}</p>
                    <span>{product.category}</span>
                    <span className='flex gap-4'>
                        <select className='rounded-3xl pl-1 pr-1 outline-none' value={quantity} onChange={handleQuantityChange}>
                            <option value="1">Qty: 1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        {cartProducts.some((cartItem) => cartItem.id === product.id) ? <span className='text-lg text-[#2d323e]'>Product is in cart</span> : <button className='border bg-[#f3ff46] pt-1 pb-1 pl-4 pr-4 rounded-3xl hover:bg-[#dde662]' onClick={() => handleProductCart(product)}>Add to cart</button>}

                    </span>
                </div>
            </div>
        </div>
    );

}

export default Detail;
