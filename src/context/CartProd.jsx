import React, { useState } from 'react';
export const CartProd = React.createContext()

const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])
    const clearCart = () => {
        setCartProducts([])
    }
    return (
        <CartProd.Provider value={{cartProducts, setCartProducts, clearCart}}>
            {children}
        </CartProd.Provider>
    )
}
export default CartProvider