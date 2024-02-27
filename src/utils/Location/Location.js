import React from 'react'
import '../../css/Location.css'
import Xmark from '../../../Images/Xmark.svg'
import MyLocation from '../../../Images/MyLocation.svg'
import { useState, useRef  } from 'react'

function Location(props) {
     const [place , setPlace] = useState("");
     const [isSlideOut, setIsSlideOut] = useState(false);
     const inputRef = useRef(null);
     const locationPage = useRef(null);
     const setShowLocation = props.show;

    const onChange = (e)=>{

        setPlace(e.target.value)
        console.log("place is : " +place)
    }

    const cancelClick  = (e)=>{
        setPlace("")
    }

    const inputFocus = ()=>{
        inputRef.current.focus();
    }

     const pageDislay = ()=>{
        setIsSlideOut(true);
        
       setTimeout(() => {
    //    locationPage.current.style.display = 'none';
    setShowLocation(false);
     }, 250);
     }
   
    
// ${isSlideOut ? ' slideOut' : ''}

  return (
    <div className={`locationPage `} ref={locationPage}>
     <div className={`Userlocation ${isSlideOut? 'slideOut' : ''}`}>
        <div className="locationSection">
                <div className="cutImage">
                    <img src={Xmark} alt="cross" onClick={pageDislay} />
                </div>
                <div className="locationInput" onClick={inputFocus}>
                    <input type="text" placeholder='Enter your location' onChange={onChange} value={place} ref={inputRef}/>
                    <span style={{ display: place ? 'block' : 'none' }} onClick={cancelClick}>cancel</span>
                </div>
                <div className="currentLocation">
                   <div className="imageSection">
                    <img src={MyLocation} alt="" />
                   </div>
                   <div className="textSection"><span>Get current location</span><span>using GPS</span></div>
                </div>
        </div>
     </div>
    </div>
    
  )

  }
export default Location
