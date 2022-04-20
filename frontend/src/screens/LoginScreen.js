import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { determineUrl } from '../codeinjection';

function LoginScreen(props) {
  const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {debug} = props;
    async function registerUser(event) {
      event.preventDefault();
      const response = await fetch(determineUrl(debug) + 'register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
          }),
      });

      const data = await response.json();

      if(data.status === 'ok') {
        alert('Registration successful');
        navigate('/Login-Signup')
      }
      else{
        alert('Registration FAILED');
      }
    }

    async function loginUser(event) {
      event.preventDefault();
      const response = await fetch(determineUrl(debug) + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
          }),
      });

      const data = await response.json();

      if(data.user) {
        //document.cookie(`token: ${data.user}`);  //might be more secure, need to look into
        sessionStorage.setItem('token', data.user);
        //localStorage.setItem('token', data.user);
        alert('Login successful');
        navigate('/');
      } else {
        alert('Incorrect username or password');
      }
    }

    return ( 
      <div className="login-modal">
        <form id='login-form' onSubmit={loginUser}>
        <div className='input-field'>
          <h3>Username:</h3>
          <input 
          value={email} onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          id='email' 
          placeholder='Email'>
          </input>
        </div>
        <div className='input-field'>
          <h3>Password:</h3>
          <input 
          value={password} onChange={(e) => setPassword(e.target.value)} 
          type="password"
          id='password' 
          placeholder='password'>
          </input>
        </div>
        <button type="submit" form='login-form'>LOG IN</button>
        <h3 className='center'>OR</h3>  
        <button onClick={registerUser}>SIGN UP</button>
        </form>
      </div> );
}

export default LoginScreen;