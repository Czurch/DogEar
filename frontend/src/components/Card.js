import React, { useState } from "react";
import OutsideAlerter from "./OutsideAlerter";
import * as injection from "../codeinjection";

export default function Card(props) {
  const { bookmark, setBookmarks, debug } = props;
  const [showOptions, setShowOptions] = useState(false);

  async function deleteDogear(bookmark)
  {
    if(!bookmark) return;

    const req = await fetch(injection.determineUrl(debug) + "bookmarks", {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify(bookmark),
    });

    const data = await req.json();
    if (data.status === "ok") {
      //some Hook to set a new Bookmark
      setBookmarks(data.bookmarks);
    } else {
      alert(data.error);
    }
    console.log(data);
  } 

  return (
    <div key={bookmark._id} className="card">
      <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
        {" "}
        {/* opens link in new tab*/}
        <div className="dogear"></div>
        <img src={bookmark.image} alt="" />
        <h1>{bookmark.title}</h1>
        <h2>{bookmark.description}</h2>
      </a>
      <div className="card-options">
        <h3>{bookmark.tags}</h3>
        <button onClick={() => setShowOptions(true)}>
          <img src="./images/elipsis.png" alt="card options" />
        </button>
        <OutsideAlerter outsideAction={() => setShowOptions(false)}>
          <ul className={showOptions ? "options-dropdown display-li" : "options-dropdown"}>
            <li className="excited"><h3>EDIT</h3><img src="/images/icons8-edit-24.png" alt="edit"/></li>
            <li className="excited"><h3>ADD/MOVE</h3><img src="/images/icons8-insert-page-24.png" alt="Add to Page"/></li>
            <li className="danger" onClick={() => deleteDogear(bookmark)}><h3>DELETE</h3><img src="/images/delete.png" alt="delete"/></li>
          </ul>
        </OutsideAlerter>
      </div>
      <h4>{bookmark.url}</h4>
    </div>
  );
}
