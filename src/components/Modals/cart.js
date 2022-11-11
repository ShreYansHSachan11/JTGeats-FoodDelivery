import React from 'react'
import shoppingbag from './images/shoppingbag.png'
import './cart.css'


import '../../style/utils.css'


const cart = () => {
  return (
   <div className='cartmodal'>
    <img src={shoppingbag} alt="" srcset="" />
    <h3>Cart is Empty</h3>
    <p>Add some items to the cart to checkout</p>
    
    
   </div>
   
  )
}

export default cart