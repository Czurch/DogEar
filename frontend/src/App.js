import React, { useEffect, useState } from 'react';
import * as injection from './codeinjection';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Modal from './components/Modal';
//import jwt from 'jsonwebtoken';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const navigate = useNavigate();

  async function populateBookmarks() {
    const req = await fetch('http://localhost:1337/api/bookmarks', {
      headers:{
        'x-access-token': localStorage.getItem('token'),
      },
    });

    const data = req.json();
    if(data.status === 'ok') {
      //some Hook to set a new Bookmark

    } else {
      alert(data.error)
    }
    console.log(data);
  }

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(token) {
  //     const user = jwt.decode(token)
  //     if(!user) {
  //       localStorage.removeItem('token')
  //       navigate('/Login-Signup');
  //     } else {
  //       populateBookmarks()
  //     }
  //   }
  // }, []);

  return (
        <main>
          <Modal displayModal={displayModal} onExit={() =>setDisplayModal(false)}></Modal>
          <header className="topnavmenu">
            <div className='top-tab left'>
              <a href="/"><img src="/images/file.png" alt="My Pages"/></a>
            </div>
            <div className='top-tab center'>
              <button className='add-button' onClick={() => setDisplayModal(true)}><img src='/images/plus.png' alt='Add New Dogear'/></button>
            </div>
            <div className='top-tab right'>
              <a href="/Login-Signup/"><img src="/images/log-in.png" alt="Log In"/></a>
              <a href="/"><img src="/images/sign-up.png" alt="Sign Up"/></a>
            </div>
          </header>
          <section className="leftnavmenu">
            <div className="page-icon">
              <img src="/images/distorted2.png" alt="icon"/>
            </div>
            <div className="page-icon">
              <img src="/images/distorted2.png" alt="icon"/>
            </div>
            <div className="page-icon">
              <img src="/images/distorted2.png" alt="icon"/>
            </div>
            <div className="page-icon">
              <button onClick={injection.CoolThingsILearned}>
                <img src="/images/more.png" alt="add page"/>
              </button>
            </div>
          </section>
          <Routes>
            <Route path='/Login-Signup' element={<LoginScreen/>}/>
            <Route path='/' element={<HomeScreen/>} exact/>
          </Routes>
        </main>
      
  );
}

export default App;
