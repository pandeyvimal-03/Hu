import React from 'react'
import "../css/signup.css"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signup'>
      <div className='signupContainer'>
        <div className="signuptitle">Fill the Details To continue using this App</div>
        <form>
           <input type="text" name='name' id='name' placeholder='enter your name'/>

           <input type="tel" name="phone" id="phone" placeholder='enter your phone' />

           <input type="password" name="password" id="password" placeholder='enter your password'/>

           <button type='submit'> signup </button>

        </form>
        <div className='bottomtext'>---------  &nbsp; already have account &nbsp;&nbsp;&nbsp;&nbsp;: <Link to='/login'>Login</Link>&nbsp;now &nbsp; ----------------</div>
      </div>
    </div>
  )
}

export default SignUp
