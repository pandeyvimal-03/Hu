import React from 'react'
import '../../css/RestaurantItem.css'
import Rating from '../../../Images/rating.png'
import { Link } from 'react-router-dom';

function RestaurantItem(props) {
    const {name , cloudinaryImageId , locality , areaName , avgRating,sla , id , aggregatedDiscountInfoV3} = props.info;
  return (
    <div className='rCard'>
        <Link to={`/restaurant/${id}`}>
      <div className="imgSection">
        <div className="transparentText">
          <h3>{`${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}</h3>
        </div>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt=""  />
      </div>
      <div className="detailSection">
       <div className="resName">{name.length > 15 ? `${name.substring(0, 18)}...` : name}</div> 
       <div className='ratSection'><img src={Rating} alt="" /><span className='ratingValue'>{avgRating}</span> <span className='devider'>|</span> <span className='distance'>{sla. slaString}</span></div>
       <div className='location'>{{locality} ? `${locality},` :"" } <span className='areaName'>{areaName.length > 10? `${areaName.substring(0 , 10)}...` : areaName}</span> </div>
      </div>
      </Link>
    </div>
  )
}

export default RestaurantItem
