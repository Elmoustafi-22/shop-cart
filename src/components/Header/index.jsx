

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';

function Header() {
    const navigate = useNavigate()
    const {cartItems} =useContext(ShoppingCartContext)
    const quantity = cartItems.map(i => i.quantity).reduce((i, j) => i + j, 0)
    
  return (
    <header className='fixed w-full z-10 max-h-[60px] bg-white px-2 py-1 border border-b-gray-200 shadow-sm shadow-gray-200'>
      <nav className='flex flex-row justify-between'>
        <a
          onClick={() => navigate('/products')}
          className='cursor-pointer'
        >
          <svg className='text-gray-800' xmlns="http://www.w3.org/2000/svg" width="2em" height="3em" viewBox="0 0 20 20" >
            <path fill="currentColor" fillRule="evenodd" d="M9.674 2.075a.75.75 0 0 1 .652 0l7.25 3.5A.75.75 0 0 1 17 6.957V16.5h.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H3V6.957a.75.75 0 0 1-.576-1.382l7.25-3.5ZM11 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7.5 9.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm3.25 0a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm3.25 0a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Z" clipRule="evenodd"></path>
          </svg>
        </a>
        <ul>

        </ul>
        <a  
            onClick={() => navigate('/cart')}
            className='flex flex-col items-center justify-center cursor-pointer border-l-2 border-l-gray-500'
        >
            <svg className='ml-2 text-gray-700' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" >
                    <path fill="currentColor" d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2z"></path>
            </svg>
            <span className='font-lato text-xs font-extrabold ml-2'>({quantity})</span>
        </a>
      </nav>
    </header>
  )
}
export default Header;
