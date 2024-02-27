import React, { useState } from 'react'
import Logo from '../../../Images/Logo.jpg'
import '../../css/Headers.css'
import searchIcon from '../../../Images/searchIcon.svg'
import cart from '../../../Images/cart.svg'
//  import offers from '../../../Images/offers.svg'
 import user from '../../../Images/user.svg'
 import Downarrow from '../../../Images/Downarrow.svg'
 import { Link } from 'react-router-dom'
 import Location from '../Location/Location'
import { useSelector } from 'react-redux'



function Header() {

    const [showLocation , setShowLocatin] = useState(false);
    const cartItem = useSelector((store)=>{
        return store.cart.items
    })

   

    

    const toggleLocation = ()=>{
        setShowLocatin(!showLocation);
    }
  return (
    <div className='header'>
        
        <div className="navbar">
            <div className="firstpart">
            <div className="logo">
                <Link to="/"><img src={Logo} alt="Image" /></Link>
            </div>
            {showLocation && <Location show={setShowLocatin}/>}
            <div className="location" onClick={toggleLocation}>
                <span >
                    <span className='mainAdress'>Ajmeri Gate</span>
                    <span className='stateAdress'>Delhi, India</span>
                </span>
                <span className='downarrow'><img src={Downarrow} alt="" /></span>
                
            </div>
            </div>
            <div className="menu">
                
                <li>
                    <Link to=''> 
                     <span><img src={searchIcon} alt="" /></span> 
                     <span>search</span>
                    </Link>
                </li>
               
                <li>
                    <Link to='/login'> 
                     <span><img src={user} alt="" /></span> 
                     <span>user</span>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'> 
                     <span><img src={cart} alt="" /></span> 
                     <span>cart<sup className='cartItem' style={{color : "orange" }} > {cartItem.length}</sup></span>
                    </Link>
                </li>
            </div>
        </div>
      
    </div>
  )
}

export default Header
