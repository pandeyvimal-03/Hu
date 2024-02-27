import React, { useEffect, useState } from 'react'
import '../css/CousinePage.css'
import RestaurantItem from '../utils/Restaurant/RestaurantItem';
import { useLocation } from 'react-router-dom';

function CousinesItem() {
    const [data , setData] = useState();
    let location = useLocation();
    let entityId = location?.state?.entityId
    
    entityId = entityId?.split('&')
    const partOfLink = entityId[1];
    const id = (entityId[0].split('='))[1]


   const fetchRestaurant = async()=>{
       const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6110886&lng=77.2345184&collection=${id}&${partOfLink}&sortBy=&filters=&type=rcv2`);

        const response = await res.json();
        setData(response)
    }
    useEffect(()=>{
        fetchRestaurant();
    },[])

    const title = data?.data?.cards[0]?.card?.card?.title 
    const description = data?.data?.cards[0]?.card?.card?.description 
    const restaurantList = data?.data?.cards.filter((e)=>{
        return e?.card?.card?.info?.name
    })
    
  return (
    <div className='cousinesItem'>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="paragraph">
       {description}
      </div>
      <div className="cousinesRestaurants">
        {
            restaurantList?.length > 0 && restaurantList?.map((e)=>{
                return(
                    <RestaurantItem key={e.card?.card?.info?.id} info = {e.card?.card?.info}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default CousinesItem
