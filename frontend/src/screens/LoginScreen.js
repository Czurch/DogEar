import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import data from '../data';
import Card from '../components/Card';

function LoginScreen() {
  const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
      event.preventDefault();
      const response = await fetch('http://localhost:1337/api/register', {
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
        navigate.push('/Login-Signup')
      }
    }

    async function loginUser(event) {
      event.preventDefault();
      const response = await fetch('http://localhost:1337/api/login', {
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
        alert('Login successful');
      } else {
        alert('Incorrect username or password');
      }

      console.log(data);
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
          d='password' 
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