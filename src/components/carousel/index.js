import React from 'react'
import '../../style/utils.css'
import './carousel.css'
import Card from '../card'
import '../cards/cards.css'

import fooditem1 from '../cards/images/food-item1.png'

import fooditem3 from '../cards/images/food-item3.png'
import fooditem4 from '../cards/images/food-item4.png'
import fooditem5 from '../cards/images/food-item5.png'
import fooditem6 from '../cards/images/food-item6.png'
import fooditem7 from '../cards/images/food-item7.png'
import fooditem8 from '../cards/images/food-item8.png'
import fooditem9 from '../cards/images/food-item9.png'
import fooditem10 from '../cards/images/food-item10.png'
const carousel = () => {
 
  function prevSlide(){
    let box = document.querySelector('.card-items');
   let width = box.clientWidth;
   box.scrollLeft -= width;
   

  }
  function nextSlide(){
    let box = document.querySelector('.card-items');
    let width = box.clientWidth;
   box.scrollLeft +=  width;
   console.log();
  }

  return (
   <div className="carousel mg-130">
    <h1>Popular items</h1>
    <div className="carousel-body">
      <div className="goleft" onClick={prevSlide}>
        <div class="circlearrow circle1"></div>
    <div class="left-arrow"></div>
      </div>
      <div className="goright" onClick={nextSlide}>
          <div class="circlearrow circle1"></div>
    <div class="right-arrow"></div>
        </div>
      <div className="card-items"> 
      <Card
          img={fooditem1}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem9}
          name="Tandoori Chicken"
          price="₹184"
          stars="4.3"
          time="15-29 min"
        />
        <Card
          img={fooditem10}
          name="Chilli Chicken"
          price="₹116"
          stars="4.1"
          time="30-40 min"
        />
        <Card
          img={fooditem3}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem4}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem5}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem6}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem7}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem8}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        </div>
        
        
    </div>
    <button className="button1">Request a Dish
    </button>
   </div>
  )
}

export default carousel