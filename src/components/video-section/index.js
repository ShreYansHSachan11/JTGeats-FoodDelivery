import React from 'react'
import './video.css'
import '../../style/utils.css'
import background1 from './images/row.jpg'
const video = () => {
  return (
    <div className='video-section m-auto maxwidth-0'>
    <h1>We are providing best <br /> 
home cooked food delivery service.</h1>
  <p>Away from home and craving the tasty homemade recipes? <br />
Choose from a selection of our delicious home cooked dishes </p>
   <img src={background1} alt="" srcset="" />
   <div className="back"></div>
    </div>
  )
}

export default video