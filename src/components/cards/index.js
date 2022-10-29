import React from 'react'
import Card from '../card'
import '../../style/utils.css'
import '../cards/cards.css'
import fooditem1 from './images/food-item1.png'
import fooditem2 from './images/food-item2.png'
import fooditem3 from './images/food-item3.png'
import fooditem4 from './images/food-item4.png'
import fooditem5 from './images/food-item5.png'
import fooditem6 from './images/food-item6.png'
import fooditem7 from './images/food-item7.png'
import fooditem8 from './images/food-item8.png'

const Cards = () => {
  return (
    <div className="kitchen-section mg-130">
      <h1>Home Kitchen</h1>
      <div className="items">
        <Card
          img={fooditem1}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem2}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
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
        <Card
          img={fooditem1}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
        />
        <Card
          img={fooditem2}
          name="Home made pizza"
          price="₹190"
          stars="4.7"
          time="50-79 min"
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
        
      </div>
    </div>
  )
}

export default Cards