import React from 'react'
import '../../css/RestaurantDetailShimmer.css'
function RestaurantDetailShimmer() {
  return (
    <div className='RestDetShimmer'>
      
      <div className="firstSection">
        <div className="NameAndRat">
              <div className="nameDetail"></div>
              <div className="ratDetail"></div>
        </div>
        <div className="price"></div>
     </div>
     <div className='secondSection'>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
        <div className="horizontalCard"></div>
     </div>
    </div>
  )
}

export default RestaurantDetailShimmer
