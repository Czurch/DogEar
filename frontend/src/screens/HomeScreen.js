import React from 'react';
import Card from '../components/Card';

function HomeScreen(props) {
    const {bookmarks} = props;
    const placeholderBookmark = {
      _id: 1,
      title: "Your first Dogear!",
      image: '/images/distorted2.png',
      description: 'Click the plus button above to add your own dogeared pages.',
      tags: '#my #first #dogear',
      url: 'localhost:3000'
    };
    
    if(bookmarks.length > 0)
    {
      return ( 
      <div className="cards">
        {bookmarks.map((bookmark) => (
        <Card key= {bookmark._id} bookmark = {bookmark}></Card>
        ))}
      </div> );
    }else{
      return(<Card bookmark = {placeholderBookmark}></Card>);
    }
}

export default HomeScreen;
