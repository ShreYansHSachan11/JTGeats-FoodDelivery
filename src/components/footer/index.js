import React from 'react'
import '../../style/utils.css'
import './footer.css'
import fb from './images/fb.png'
import insta from './images/insta.png'

const footer = () => {
  return (
    <footer className=''>
      <div className="footer">
      <div className="footernav maxwidth-0">
        <div className="footernav-left">
         <p>JTGeats</p>
        </div>
        
        <div className="footernav-center">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        
        <div className="footernav-right">
            <div className="fb">
              <img src={fb} alt="" srcset="" />
            </div>
            <div className="insta">
              <img src={insta} alt="" srcset="" />
            </div>
        </div>
    </div>
    <hr className='hr'/>
    </div>
  </footer>
  )
}

export default footer