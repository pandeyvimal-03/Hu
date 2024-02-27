import React, { useState } from 'react'
import FoodItem from './AccordianFoodItem';
import Up from '../../../Images/angle-up.svg'
import Down from '../../../Images/angle-down.svg'
import '../../css/Accordian.css'

function Accordian({data }) {
    const [show , setShow] = useState(true);
   
    const foodData = data?.card?.card?.itemCards ;
    
  return (
    <div className='accordian' >
       <div className="titleAndDrop" onClick={()=>{setShow(!show)}}>
            <div className="title">{data?.card?.card?.title}</div>
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

export default Accordian
