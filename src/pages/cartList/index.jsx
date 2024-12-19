import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import CartTile from '../../components/cartTile';

function CartListPage() {
  const {cartItems} = useContext(ShoppingCartContext)
  const navigate = useNavigate()
  
  return (
    <div className='max-w-5xl mx-auto max-md:max-w-xl py-4'>
      <h1 className='font-lato text-2xl font-bold text-gray-800 text-center'>
        My Cart Page
      </h1>
      <div className='grid md:grid-cols-3 gap-8 mt-12'>
        <div className='md:col-span-2 space-y-4'>
          {
            cartItems?.length > 0 ?
            cartItems?.map(singleCartItem => <CartTile singleCartItem={singleCartItem}/>)
            : <h3 className='text-2xl font-lobster'>No items available in the cart.</h3>
          }
        </div>
        <div className='bg-gray-100 rounded-sm p-4 h-max'>
          <h3 className='font-lato font-extrabold text-xl text-gray-950 border-b border-gray-300 pb-2'>
            Order Summary
          </h3>
          <ul className='text-gray-700 mt-4 space-y-2'>
            <p className='font-lato flex flex-wrap gap-2 text-sm font-bold'>
              Total : <span className='font-extrabold'>${cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}</span>
            </p>
          </ul>
          <div className='mt-5 flex gap-2'>
            <button disabled={cartItems.length === 0} className='font-lato text-sm px-4 py-3 bg-black text-white font-extrabold rounded-lg disabled:opacity-55'>Checkout</button>
            <button onClick={() => navigate('/')} className='font-lato text-sm px-4 py-3 bg-black text-white font-extrabold rounded-lg'>Continue shopping</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartListPage 