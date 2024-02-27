import React, { useState, useEffect , useRef } from 'react';
import '../css/Home.css';
import RestaurantItem from '../utils/Restaurant/RestaurantItem';
import CousineItem from './cousine/CousineItem';
import ArrowLeft from '../../Images/arrow-left-solid.svg'
import ArrowRight from '../../Images/arrow-right-solid.svg'
import HomePageShimmer from '../utils/ShimmerAndSpinner/HomePageShimmer';

import useFetch from '../customHooks/useFetch';
import ErrorPage from './ErrorPage';


function Home() {
  
  const horizontalSectionRef = useRef(null);
  const [isScrollAtLeftMost, setIsScrollAtLeftMost] = useState(true);
  const [isScrollAtRightMost, setIsScrollAtRightMost] = useState(false);
 
 
 

 
  const {loading , error , resCard , horizontalResCard , section0Card } = useFetch()

  if(error){
      return <ErrorPage/>
    }

 const dynamicScroll = (e)=>{

  
    const target = e.target;
     setIsScrollAtLeftMost(target.scrollLeft <= 0);
       setIsScrollAtRightMost(target.scrollLeft + target.clientWidth >= target.scrollWidth - 1);
     

   }


// Handle scrolling for the button

  const handleScroll = (direction) => {
    const scrollAmount = 600;
    const container = horizontalSectionRef.current;
  
    if (container) {
      let newScrollLeft;
  
      if (direction === 'left') {
        newScrollLeft = Math.max(0, container.scrollLeft - scrollAmount);
      } else if (direction === 'right') {
        newScrollLeft = Math.min(container.scrollLeft + scrollAmount, container.scrollWidth - container.clientWidth);
      }
  
      container.scrollLeft = newScrollLeft;
  
      setIsScrollAtLeftMost(newScrollLeft <= 0);
      setIsScrollAtRightMost(container.scrollLeft + container.clientWidth >= container.scrollWidth - 1);

    }
  
  
  };
  
  


  return (
    <div className='container'>
      {loading ? <HomePageShimmer/> : ( 
      <>
      <div className="section0">
        <h2>what's on your mind?</h2>
        <div className="section0Item">
          {
            section0Card?.length >0 && section0Card?.map((e)=>{
              return(
                <CousineItem key={e.id}  ImageId = {e.imageId} entityId={e.entityId} text = {e.action?.text}/>
              )
            })
          }
        </div>
      </div>
      <div className="section1">
            <h2>Top restaurant chains in Mumbai</h2>
            <div className="scrollButton">
              <button className="leftScroll" onClick={() => handleScroll('left')} disabled={isScrollAtLeftMost} style={{ backgroundColor: isScrollAtLeftMost ?  'rgb(245, 245, 245)' : 'rgb(213, 213, 213)' }}>
                <img src={ArrowLeft} alt="" />
              </button>
              <button className="rightScroll" onClick={() => handleScroll('right')} disabled={isScrollAtRightMost} style={{ backgroundColor: isScrollAtRightMost ?  'rgb(245, 245, 245)' : 'rgb(213, 213, 213)' }}>
                <img src={ArrowRight} alt="" />
              </button>
             
             
            </div>
            <div className="horizontalSection" ref={horizontalSectionRef} onScroll={(e)=>{dynamicScroll(e)}}>
            {
               horizontalResCard?.length > 0 && (horizontalResCard).map((e)=>{
                return(
                  <RestaurantItem key={e.info.id} info={e.info} ></RestaurantItem>
                )
              })
            }
            </div>
      </div>
      
  
      <div className="section2">
          <h2>Restaurants with online food delivery in Mumbai</h2>
          <div className="verticalSection">
          {
              resCard && resCard?.map((e)=>{
              return(
                <RestaurantItem key={e.info.id} info={e.info} ></RestaurantItem>
              )
            })
          }  
          </div>
      </div>
      
      </> )}
     
    </div>
  );
}

export default Home;
