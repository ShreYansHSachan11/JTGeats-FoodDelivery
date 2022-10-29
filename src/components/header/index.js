import React from 'react'
import '../../style/utils.css'
import './header.css'
import search from './images/search.png'
import bag from './images/shopping_bag.png'
import character from './images/character.png'

const header = () => {
  return (
   <header>
   <div className="navbar">
        <div className="nav-left">
         <p>JTGeats</p>
        </div>
        
        <div className="nav-center">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
        
        <div className="nav-right">
            <img src={search} alt="" srcset="" />
            
            <img className="bag" src={bag} alt="" srcset="" />
          
            

        </div>

    </div>
    <div className="header-section">

      <div className="header-left ">
      <h1>Authentic Home food in India</h1>
      <p>JTGeats is a courier service in which authentic home cook food is delivered to a customer.</p>
      <div className="button-section">
       <input type="text" placeholder='Search food you love' />
       <button className="btn">Search</button>
      </div>
    </div>

    <div className="header-right">
      <img src={character} alt="" srcset="" />
    </div>
    </div>
    
    </header>
  )
}

export default header