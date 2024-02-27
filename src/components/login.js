import React from 'react'
import "../css/login.css"
import { Link } from 'react-router-dom'

function login() {
  return (
    <div className='login'>
      <div className='loginContainer'>
        <div className="logintitle">Login To continue using this App</div>
        <form>
           
           <input type="tel" name="phone" id="phone" placeholder='enter your phone' />

           <input type="password" name="password" id="password" placeholder='enter your password'/>

           <button type='submit'> Login </button>

        </form>
        <div className='bottomtext'>---------  &nbsp; Don't have account &nbsp;&nbsp;&nbsp;&nbsp;: <Link to="/signup">Signup</Link>&nbsp; now &nbsp;----------------</div>
      </div>
    </div>
  )
}

export default login
