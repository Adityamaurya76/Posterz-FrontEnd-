import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
    <div className="login-box">
       <h2 className='heading'>Login</h2>
       <form >
          <label htmlFor="email">Email</label>
          <input type="email" 
          className='email'
           id="email" 
           />

          <label htmlFor ="password">Password</label>
          <input type="password" className='password' id="password" 
           />

          <input type="submit" className='submit' />

       </form>
       <p className='subheading'>Do not have an account? <Link  className="link"to="/signup">Sign Up</Link> </p>
    </div>
 </div>
  )
}

export default Login