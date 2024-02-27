import React, { useState } from 'react'
import '../../css/SubAccordian.css'
import Up from '../../../Images/angle-up.svg'
import Down from '../../../Images/angle-down.svg'
import FoodItem from './AccordianFoodItem'


function AnothSubAccord({data}) {
    const [show , setShow] = useState(true);
   
    const foodData = data?.itemCards ;
    
  return (
    <div className='SubAccordian'>
       <div className="titleAndDrop" onClick={()=>{setShow(!show)}}>
            <div className="title">{data?.title}</div>
            <div className="drop" ><img src={show ? Down : Up}></img></div>
       </div>
       {
        show && foodData?.map((elem)=>{
          return(<FoodItem key={elem.card.info.id} data = {elem}/>)
        })
       }
    </div>
  )
}

export default AnothSubAccord
