import React, { useEffect, useState } from 'react';
import * as injection from './codeinjection';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Modal from './components/Modal';
import data from './data';
//import jwt from 'jsonwebtoken';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [currentBookmarks, setCurrentBookmarks] = useState(data.bookmarks);
  const navigate = useNavigate();

  async function AddNewBookmark(newBookmark) {
    if(!newBookmark) return;

    const temp = [...currentBookmarks];
    temp.push(newBookmark);

    const req = await fetch('http://localhost:1337/api/bookmarks', {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
        'x-access-token': sessionStorage.getItem('token'),
      },
      body: JSON.stringify(temp),
    });


    const data = await req.json();
    if(data.status === 'ok') {
      //some Hook to set a new Bookmark
      setCurrentBookmarks(data.bookmarks);
    } else {
      alert(data.error);
    }
    console.log(data);
  }

  async function populateBookmarks() {
    console.log("getting bookmarks");
    const req = await fetch('http://localhost:1337/api/bookmarks', {
      method: 'GET',
      headers:{
        'x-access-token': sessionStorage.getItem('token'),
      },
    });

    const data = await req.json();
    if(data.status === 'ok') {
      //we were able to populate bookmarks
      setCurrentBookmarks(data.bookmarks);
    } else {
      alert(data.error)
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(!token) navigate('/Login-Signup');
    else{
      try{
        populateBookmarks();
      } catch(err)
      {
        console.log(err)
      }
    }
  }, []);

  return (
        <main>
          <Modal displayModal={displayModal} onExit={() =>setDisplayModal(false)} onSubmit={AddNewBookmark}></Modal>
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
            <Route path='/' element={<HomeScreen bookmarks={currentBookmarks}/>} exact/>
          </Routes>
        </main>
      
  );
}

export default App;
