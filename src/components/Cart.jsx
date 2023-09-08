import React, { useContext } from 'react';
import { closeIcon, trashIcon } from '../assets/svgs/Icons';
import { CartProd } from '../context/CartProd';
import { Link } from 'react-router-dom';
import useQuantity from '../hooks/useQuantity';
import useTotalPrice from '../hooks/useTotalPrice';

const Cart = ({ on, handleOn }) => {
    const { cartProducts, clearCart, setCartProducts } = useContext(CartProd)
    const {itemsValue} = useQuantity()
    const {formattedTotal} = useTotalPrice()
    const handleChange = (e, id) => {
        const updatedCartProd = cartProducts.map(cart => {
            if (id === cart.id) {
                return { ...cart, quantity: parseInt(e.target.value) }
            }
            return cart
        })
        setCartProducts(updatedCartProd)
    }
    const handleClickDelete = (id) => {
        setCartProducts(cartProducts.filter(cart => cart.id !== id))
    }
    return (
        on && (
            <div className='min-h-screen w-screen bg-[#a8a8a8c7] fixed'>
                <div className='fixed top-0 right-0 w-72 min-h-full bg-[#242831] p-6 text-right flex flex-col  overflow-y-auto bottom-0'>
                    <div>
                        <button onClick={() => handleOn()}>{closeIcon()}</button>
                    </div>
                    <div className={cartProducts.length > 0 ? 'flex-1' : undefined}>
                        <ul className=''>
                            {cartProducts.map(cart => (
                                <li key={cart.id} className='text-white'>
                                    <div className='h-[0.1px] bg-slate-300 mt-4 mb-4'></div>
                                    <h3>{cart.title}</h3>
                                    <p>Price: ${cart.price} x Quantity {cart.quantity}</p>
                                    <p className='text-lg'>${parseFloat((cart.price * cart.quantity).toFixed(2))}</p>
                                    <div className='flex justify-end items-center gap-1'>
                                        <select className='rounded-3xl pl-1 pr-1 outline-none text-black m-1' value={cart.quantity} onChange={(e) => handleChange(e, cart.id)}>
                                            {itemsValue(cart.quantity)}
                                        </select>
                                        <button className='cursor-pointer' onClick={() => handleClickDelete(cart.id)}>{trashIcon()}</button>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        {
                            cartProducts.length > 0
                                ?
                                <>
                                    <div>
                                        <p className='text-white text-2xl '>TOTAL: ${formattedTotal}</p>
                                    </div>
                                    <div className='flex gap-3 flex-wrap justify-end mt-3'>
                                        <Link className='border bg-[#ffffff] pt-1 pb-1 pl-3 pr-3 rounded-3xl hover:bg-[#131307] hover:border-[#131307] hover:text-[#d8d8d8]' to='/checkout'>Checkout</Link>
                                        <button className='border bg-[#f3ff46] pt-1 pb-1 pl-3 pr-3 rounded-3xl hover:bg-[#dde662]' onClick={() => clearCart()}>Clear Cart</button>
                                    </div>
                                </>
                                :
                                <p className='text-white text-center'>Cart is empty</p>
                        }
                    </div>
                </div>
            </div>
        )
    );
}

export default Cart;
