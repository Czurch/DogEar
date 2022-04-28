import React from 'react';

export default function TopNavBar(props)
{
    const {setDisplayModal} = props;
    return(
        <header className="topnavmenu">
        <div className='top-tab left'>
            <img title="Welcome to Dogear!" src='/images/dogear_logo1.png' className='logo' alt='logo'/>
            <a title="My Pages" href="/"><img src="/images/file.png" alt="My Pages"/></a>
        </div>
        <div className='top-tab center'>
            <button className='add-button' onClick={() => setDisplayModal(true)}><img src='/images/plus.png' alt='Add New Dogear'/></button>
        </div>
        <div className='top-tab right'>
            <a title="Log In" href="/Login-Signup/"><img src="/images/log-in.png" alt="Log In"/></a>
            <a title="Create New Account" href="/"><img src="/images/sign-up.png" alt="Sign Up"/></a>
        </div>
    </header>
    )
}