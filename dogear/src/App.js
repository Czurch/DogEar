import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

const post = {
  linkImage: "http://placecorgi.com/200/200",
  title: "What a pup",
  details: "As you can see this is quite the pup",
  linkURL: "http://placecorgi.com/200/200"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Post linkImage = {post.linkImage} title = {post.title} details = {post.details} linkURL = {post.linkURL}/>
        <div className="create-post">        
          <button className="create-post">➕</button>
        </div>

      </header>
    </div>
  );
}

export default App;
