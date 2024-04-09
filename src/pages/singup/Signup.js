import React from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';

function Signup() {

   

  return (
    <div className="Signup">
    <div className="Signup-box">
       <h2 className='heading'>SignUp</h2>
           <form  >
           <label htmlFor="text">Name</label>
            <input type="text" className='name' id ="name" />
 
 
            <label htmlFor="email">Email</label>
            <input type="email" className='email' id ="email" />
 
            <label htmlFor="password">Password</label>
            <input type="password" className='password' id ="password" />
 
         <input type="submit" className='submit' />
 
           </form>
           <p className='subheading'>already have an account? <Link className='link' to="/login">Login</Link> </p>
       </div>
    </div>
  )
}

export default Signup;