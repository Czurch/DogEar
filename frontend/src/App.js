import React, { useEffect, useState } from 'react';
import * as injection from './codeinjection';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Modal from './components/Modal';
import data from './data';
import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';
//import jwt from 'jsonwebtoken';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [currentBookmarks, setCurrentBookmarks] = useState([]);
  const navigate = useNavigate();

  async function AddNewBookmark(newBookmark) {
    if(!newBookmark) return;

    const temp = [...currentBookmarks];
    temp.push(newBookmark);

    const req = await fetch('https://dogearapp.herokuapp.com/api/bookmarks', {
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

  return (
        <main>
          <Modal displayModal={displayModal} onExit={() =>setDisplayModal(false)} onSubmit={AddNewBookmark}></Modal>
          <TopNavBar setDisplayModal={setDisplayModal}></TopNavBar>
          <SideNavBar></SideNavBar>
          <Routes>
            <Route path='/Login-Signup' element={<LoginScreen/>}/>
            <Route path='/' element={<HomeScreen bookmarks={currentBookmarks} setBookmarks = {setCurrentBookmarks}/>} exact/>
          </Routes>
        </main>
      
  );
}

export default App;
