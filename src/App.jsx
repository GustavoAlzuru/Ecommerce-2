import './App.css'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import Public from './routes/Public'
import Footer from './components/Footer'
import Cart from './components/Cart'
import useOn from './hooks/useOn'
import CartProvider from './context/CartProd'
import { useState } from 'react'

function App() {
  const { handleOn, on } = useOn()
  const location = useLocation()
  const isCheckoutPage = location.pathname === '/checkout' || location.pathname === '/sign-in' || location.pathname === '/register'
  const [search, setSearch] = useState('')

  const updateSearch = (value) => {
    if(value.startsWith(' ')) return
    setSearch(value)
  }
  return (
    <CartProvider>
      {!isCheckoutPage && (
        <>
          <Navbar handleOn={handleOn} updateSearch={updateSearch} search={search}/>
          <Cart on={on} handleOn={handleOn} />
        </>
      )}
      <div className='bg-[#f3f3f3d8] min-h-screen flex flex-col'>
        <div className='flex-1'>
          <Public search={search}/>
        </div>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
