import React from 'react'
import './requestdish.css'
import './cart.css'
const requestdish = () => {
  return (
    <div className='requestdishmodal'>
   
    <h1>Request a Dish</h1>
    <div className="inputs">
       
      <div className="input">
        <p>Name*</p>
        <input type="text" placeholder='Enter name of the dish' />
      </div>
      <div className="input">
        <p>Upload an image</p>
        <input type="text" placeholder='Paste a URL' />
      </div>
    </div>
    
    
   </div>
  )
}

export default requestdish