import React, { useState } from 'react'
import '../../css/FoodItem.css'
import veg from '../../../Images/v-veg.png'
import nonveg from '../../../Images/n-veg.png'
import { useDispatch } from 'react-redux'
import { addItem , removeItem} from '../../Redux/cartSlice'

function FoodItem({data}) {
    const [isGreen , setGreen] = useState(true)
    const {isVeg , name , description , price , imageId , id} = data?.card?.info;
    
    const dispatch = useDispatch();
    
    const handleClick = (data )=>{
          setGreen(!isGreen)
            if(isGreen){
              dispatch(addItem(data))
            }
            else{
              dispatch(removeItem(data))
            }
         
    }
  return (
    <div className='foodItem'>
        <div className="FoodDetailSection">
            <div className="isVeg"><img src={isVeg ?  veg: nonveg} alt=""  /></div>
            <div className="FoodName">{name}</div>
            <div className="PriceValue">{`₨. ${(price/100)}`}</div>
            <div className="description">{description}</div>
        </div>
        <div className="FoodImageSection">
           { imageId && <span><img src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`} alt="" /></span>}
            <button onClick={()=>handleClick(data )} style={isGreen ? {color : 'green' , borderColor : 'green'} : {color : 'red' , borderColor : 'red'}}><span>{isGreen ? 'Add' : 'Remove'}</span> <span>{isGreen ? '+' : '-'}</span></button>
        </div>
    </div>
  )
}

export default FoodItem
