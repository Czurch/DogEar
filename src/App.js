import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./Post";
import Modal from "./Modal";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const samplePost = {
  id: uuid(),
  linkImage: "http://placecorgi.com/200/200",
  title: "What a pup",
  details: "As you can see this is quite the pup",
  linkURL: "http://placecorgi.com/200/200",
};

function App() {
  const [posts, setPosts] = useState([samplePost]);
  const [modalActive, setModalActive] = useState(false);

  //Add new Dogear
  const addDogear = (newPost) => {
    setPosts([...posts, newPost]);
    setModalActive(false);
  };

  //Remove Dogear
  const removeDogear = (id) => {
    setPosts([...posts.filter((post) => post.id !== id)]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DogEar</h1>
      </header>
      <body className="App-body">
        <div className="full-page-column"></div>
        {modalActive ? (
          <div className="Modal-BG">
            <Modal onSubmit={addDogear} onClose={() => setModalActive(false)} />
          </div>
        ) : null}
        <img src={logo} className="App-logo" alt="logo" />
        <div className="masonry">
          {posts.map((post) => (
            <Post post={post} onClick={() => removeDogear(post.id)} />
          ))}
        </div>
        <button className="create-post" onClick={() => setModalActive(true)}>
          +
        </button>
      </body>
    </div>
  );
}

export default App;
