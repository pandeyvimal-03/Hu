import React from 'react'
import spinn from '../../../Images/spinn.gif'
import '../../css/Spinner.css'
function Spinner() {
  return (
    <div className='spinner'>
    <img src={spinn} alt="" />
  </div>
  )
}

export default Spinner
