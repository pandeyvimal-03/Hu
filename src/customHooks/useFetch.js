import React, { useEffect, useState } from 'react'

 function useFetch() {
     
    const [resCard, setResCard] = useState([]);
    const [horizontalResCard , setHorizontalResCard] = useState([]);
    const [section0Card , setSection0Card] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

          
        
         const fetchData = async (lat , long)=>{
               try {
                    
                    const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
                    const response = await res.json();
                    
                    const newArray = response.data.cards.filter((e)=>{
                        return e.card?.card?.id === "top_brands_for_you" || e.card?.card?.id === "restaurant_grid_listing" || e.card?.card?.id === "whats_on_your_mind";
                    })

                    const newSection0Card = newArray[0]?.card?.card?.gridElements?.infoWithStyle?.info;
                    const newResCard = newArray[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    const newHorizontalCards = newArray[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                    setSection0Card(newSection0Card)
                    setHorizontalResCard(newHorizontalCards)
                    setResCard(newResCard);
                    setLoading(false);
               } 
               catch (error) {
                
                   setError(error)
                }
        }

    useEffect(()=>{

        navigator.geolocation.getCurrentPosition((position) => {
       
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchData(latitude , longitude)
           
        },
          (error) => {
            
            setError(error)
        });

  },[])

    return {loading , error , resCard , horizontalResCard , section0Card }
  
}

export default useFetch
