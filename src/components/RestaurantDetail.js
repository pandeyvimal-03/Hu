import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../../Images/rating.png'
import '../css/RestaurantDetails.css'
import Accordian from './accordian/Accordian'
import AnotherAcoord from './accordian/AnotherAcoord'
import RestaurantDetailShimmer from '../utils/ShimmerAndSpinner/RestaurantDetailShimmer'


function RestaurantDetail() {
  const { id } = useParams();
  const [data , setData] = useState(null)
  const [loading , setLoading] = useState(true)
  

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.637278&lng=77.2259488&restaurantId=${id}`);
            const response = await res.json();
            setData(response);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            return(<Error></Error>)
        }
    };

    fetchData();
}, [id]);


const restaurantInfo = data?.data?.cards?.[2]?.card?.card?.info || {};
const accordianData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
const newAccordian = accordianData.filter((e) => e.card?.card?.itemCards || e.card?.card?.categories);

const {
    name,
    city,
    feeDetails,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    sla
} = restaurantInfo;

    
  return (
    <div className='restaurantDetail'>
        {loading ? <RestaurantDetailShimmer/> : (<>
            <div className="sec1">
        <div className="restaurantIdentity">
            <div className='identitySec'>
                <span className="RestName">{name}</span>
                <span className="cousine">{cuisines && cuisines.length >= 2 ? `${cuisines[0]} , ${cuisines[1]}` : ''}</span>
                <span className='adress'>{city}</span>
            </div>
              
            <div className='ratingSec'>
            <span className="rating"><img src={Rating} alt="" /> <span className='ratingValue'>{avgRatingString}</span></span>
               <span className="noOfRating">{totalRatingsString}</span>
            </div>
        </div>
        <div className="distanceAndDelivery">
            {feeDetails?.message}
        </div>
      </div>
      <div className="sec2">
        <div className="timeAndPrice">
            <span className='time'>{sla?.slaString}</span>
            <span className='price'>{costForTwoMessage}</span>
        </div>
      </div>
      <div className="sec3">
        { 
          newAccordian?.map((elem , index)=>{
            return(
                <>
                  {elem.card?.card?.categories? <AnotherAcoord key={index} data={elem}/> : <Accordian key={index}  data = {elem}/> }
                  
                </>
              
            )
        })
           
        }
      </div>
        </>)}
      
    </div>
  )
}

export default RestaurantDetail
