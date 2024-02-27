import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "../css/Cart.css"
import CartItem from './cartItem/CartItem'

function Cart() {
 

  const cartItem = useSelector((store)=>{
    return store.cart.items
  })
  return (
    <div className='cart'>
      <h2 > Cart</h2>
      <div className="cartItemContainer">
        {
          cartItem.map((e)=>{
            return <CartItem key={e.id} data={e} />
          })
        }
      </div>
      <div className="totalamount"> <h3>Total amount</h3> <h3>{900}</h3></div>
      <div className="paynow"><h3>Pay Now</h3></div>
    </div>
  )
}

export default Cart
