import React from "react";
import './card.css'
import addicon from './images/add-icon.png'
import staricon from './images/star-icon.png'
const Card = ({ img, name, price, stars, time }) => {
  return (
    <div className="fullcard">
      <img className="main-img" src={img} alt="products" />
       <div>
        <div className="details">
        <div className="details1">
            <p>{name}</p>
            <p>{price}</p>
        </div>
        <div className="details2">
            <div className="details2left">
             <img className="star" src={staricon} alt="" srcset="" />
             <p>{stars}</p>
              <p>{time}</p>

            </div>
            <div className="details2right">
             <img className="add" src={addicon} alt="" srcset="" />
</div>

        </div>
        </div>
       </div>
    </div>
  );
};

export default Card;
