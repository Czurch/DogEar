import React, { useState } from 'react';
import * as peepee from './codeinjection';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Modal from './components/Modal';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
        <main>
          <Modal displayModal={displayModal} onExit={() =>setDisplayModal(false)}></Modal>
          <header className="topnavmenu">
            <div className='top-tab left'>
              <img src='/images/doggy-icon.png' className='logo' alt='logo'/>
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
              <button>
                <img src="/images/distorted2.png" alt="icon"/>
              </button>
            </div>
            <div className="page-icon">
              <button>
                  <img src="/images/distorted2.png" alt="icon"/>
              </button>
            </div>
            <div className="page-icon">
              <button>
                <img src="/images/distorted2.png" alt="icon"/>
              </button>
            </div>
            <div className="page-icon">
              <button onClick={peepee.CoolThingsILearned}>
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
