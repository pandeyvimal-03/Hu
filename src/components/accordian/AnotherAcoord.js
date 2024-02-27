import React from 'react'
import AnothSubAccord from './AnothSubAccord'
import '../../css/AnotherAccordian.css'

function AnotherAcoord({data}) {
  return (
    <div className='anotherAccord'>
      <div className='title'>{data?.card?.card?.title}</div>
      {
        data?.card?.card?.categories?.map((elem)=>{
            return(
                <AnothSubAccord data = {elem}/>
            )
        })
      }
    </div>
  )
}

export default AnotherAcoord
