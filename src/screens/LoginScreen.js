import React from 'react';
import data from '../data';
import Card from '../components/Card';

function LoginScreen() {
    return ( 
      <div className="login-modal">
        <div className='input-field'>
          <h3>Username:</h3>
          <input autoComplete='password' id='password' placeholder='Email'></input>
        </div>
        <div className='input-field'>
          <h3>Password:</h3>
          <input autoComplete='password' id='password' placeholder='password'></input>
        </div>
        <button>LOG IN</button>
        <h3 className='center'>OR</h3>  
        <button>SIGN UP</button>
      </div> );
}

export default LoginScreen;