import React, { useState } from 'react'
import veg from '../../../Images/v-veg.png'
import nonveg from '../../../Images/n-veg.png'
import '../../css/CartItem.css'
import { useDispatch } from 'react-redux'
import {  removeItem} from '../../Redux/cartSlice'

function CartItem({ data }) {
    const [quantity, setQuantity] = useState(1)
    const { isVeg, name, imageId, id } = data?.card?.info;
    const price = data?.card?.info?.price || data?.card?.info?.defaultPrice

  
    const dispatch = useDispatch();

    const plusQuantiy = () => {
        setQuantity(quantity + 1)
       
    }

    const minusQuantity = () => {
        if (quantity === 1) {
            dispatch(removeItem(data));
           
        } else {
            setQuantity(quantity - 1);
           
        }
    }

   

    return (
        <div className='cartItems'>
            <div>
                <div className="img">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`} alt="" />
                </div>
                <div className="vegname">
                    <div className="veg"><img src={isVeg ? veg : nonveg} alt="" /></div>
                    <div className="name">{name.length > 18 ? `${name.substring(0, 18)}...` : name}</div>
                </div>
            </div>
            <div className="sec2">
                <div>
                    <div className="btn">
                        <div className="plus" onClick={plusQuantiy}>+</div>
                        <div className="quantity">{quantity}</div>
                        <div className="minus" onClick={minusQuantity} style={quantity < 1 ? { display: 'nodne' } : { display: 'block' }}>-</div>
                    </div>
                </div>
                <div>
                    <div className="price">{`₨. ${(Number(price) / 100) * quantity}`}</div>
                </div>
            </div>

        </div>
    )
}

export default CartItem
