import React, { useEffect, useState } from "react";
import * as injection from "./codeinjection";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Modal from "./components/Modal";
import TopNavBar from "./components/TopNavBar";
import SideNavBar from "./components/SideNavBar";
//import jwt from 'jsonwebtoken';

function App() {
  const debug = "";

  const [displayModal, setDisplayModal] = useState(false);
  const [currentBookmarks, setCurrentBookmarks] = useState([]);

  async function AddNewBookmark(newBookmark) {
    if (!newBookmark) return;

    let temp = [...currentBookmarks];
    temp.unshift(newBookmark);

    const req = await fetch(injection.determineUrl(debug) + "bookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify(temp),
    });

    const data = await req.json();
    if (data.status === "ok") {
      //some Hook to set a new Bookmark
      setCurrentBookmarks(data.bookmarks);
    } else {
      alert(data.error);
    }
    console.log(data);
  }

  return (
    <main>
      <Modal
        debug={debug}
        displayModal={displayModal}
        onExit={() => setDisplayModal(false)}
        onSubmit={AddNewBookmark}
      ></Modal>
      <TopNavBar setDisplayModal={setDisplayModal}></TopNavBar>
      <SideNavBar></SideNavBar>
      <Routes>
        <Route path="/Login-Signup" element={<LoginScreen debug={debug} />} />
        <Route
          path="/"
          element={
            <HomeScreen
              bookmarks={currentBookmarks}
              setBookmarks={setCurrentBookmarks}
              debug={debug}
            />
          }
          exact
        />
      </Routes>
    </main>
  );
}

export default App;
