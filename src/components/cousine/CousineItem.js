import React from 'react'
import '../../css/CousineItem.css'
import { Link , useNavigate} from 'react-router-dom'
function CousineItem({ImageId , entityId , text }) {
  
  const navigate = useNavigate();
  const clickHandle = ()=>{
    navigate(`/collections/${text}` ,{ state : {entityId : entityId }})
  }
  return (
    <div className='DishesItem'  onClick={clickHandle}>
      
     <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ImageId}`} alt=""/>
    
    </div>
  )
}

export default CousineItem
