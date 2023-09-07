import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import Public from './routes/Public'
import Footer from './components/Footer'
import Cart from './components/Cart'
import useOn from './hooks/useOn'
import CartProvider from './context/CartProd'


function App() {
  const { handleOn, on } = useOn()
  const location = useLocation()
  const isCheckoutPage = location.pathname === '/checkout'
  return (
      <CartProvider>
        {!isCheckoutPage && (
          <>
            <Navbar handleOn={handleOn} />
            <Cart on={on} handleOn={handleOn} />
          </>
        )}
        <div className='bg-[#f3f3f3d8] min-h-screen flex flex-col'>
          <div className='flex-1'>
            <Public />
          </div>
          <Footer />
        </div>
      </CartProvider>
  )
}

export default App
