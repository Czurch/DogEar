import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import {useNavigate} from 'react-router-dom';
import { determineUrl } from '../codeinjection';

function HomeScreen(props) {
  const {bookmarks, setBookmarks, debug} = props;
  const navigate = useNavigate();
  const placeholderBookmark = {
    _id: 1,
    title: "Your first Dogear!",
    image: '/images/distorted2.png',
    description: 'Click the plus button above to add your own dogeared pages.',
    tags: '#my #first #dogear',
    url: 'localhost:3000'
  };

  async function populateBookmarks() {
    const req = await fetch(determineUrl(debug) + 'bookmarks', {
      method: 'GET',
      headers:{
        'x-access-token': sessionStorage.getItem('token'),
      },
    });

    const data = await req.json();
    if(data.status === 'ok') {
      //we were able to populate bookmarks
      setBookmarks(data.bookmarks);
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
  
  if(bookmarks.length > 0)
  {
    return ( 
    <div className="cards">
      {bookmarks.map((bookmark) => (
      <Card key= {bookmark._id} bookmark = {bookmark} setBookmarks={setBookmarks} debug={debug}></Card>
      ))}
    </div> );
  }else{
    return(<Card bookmark = {placeholderBookmark} setBookmarks={setBookmarks} debug={debug}></Card>);
  }
}

export default HomeScreen;
