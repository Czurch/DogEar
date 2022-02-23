import React from 'react';
import data from '../data';
import Card from '../components/Card';

function HomeScreen() {
    return ( 
    <div className="cards">
    {data.bookmarks.map((bookmark) => (
      <Card key= {bookmark._id} bookmark = {bookmark}></Card>
    ))}
    </div> );
}

export default HomeScreen;
