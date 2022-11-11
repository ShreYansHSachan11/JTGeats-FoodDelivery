import React,{useState} from "react";
import './card.css'
import addicon from './images/add-icon.png'
import staricon from './images/star-icon.png'
import minus from './images/minus.png'
import addonclick from './images/addonclick.png'
const Card = ({ img, name, price, stars, time ,id }) => {
  const[itemsInCart, setitemsInCart] = useState(0);
  function transformbutton(){
    setitemsInCart(1);
  return(
    <div className="details2rightonclick" id="" >
  <img className="icons" src={minus} alt="" srcset="" />
  <input type="text" value={itemsInCart}/>
  <img className="icons" src={addonclick} alt="" srcset="" />
</div>
  )
    

  }
  return (
    <div className="fullcard" >
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
            
             <img id={id} className="add" src={addicon} alt="" srcset="" onClick={transformbutton} />
</div>


        </div>
        </div>
       </div>
    </div>
  );
};

export default Card;
