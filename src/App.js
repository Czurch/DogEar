import React from "react";
import styled from "styled-components";
import Post from "./Post";
import Modal from "./Modal";

import "./App.css";
import "normalize.css";

const Button = styled.button`
  text-align: center;
  background-color: #eeeeee;
  border-radius: 100%;
  padding: 0px, 5px, 5px, 5px;
  font-size: 40px;
  font-weight: bold;

  &:hover {
    background-color: #cccccc;
  }
`;

const ModalBG = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

function App() {
  const [{ posts, modalActive }, send] = React.useReducer(
    (state, event) => {
      switch (event.type) {
        case "posts_requested":
          return state;
        case "posts_received":
          return { ...state, posts: event.payload };
        case "posts_request_failed":
          return state;
        case "post_created":
          return {
            // return a new state object with the created "post" added to the existing "posts"
          };
        case "hyrdrated_state":
          return JSON.parse(event.payload);
        case "modal_opened":
          return { ...state, modalActive: true };
        case "modal_closed":
          return { ...state, modalActive: false };
        default:
          return state;
      }
    },
    { posts: null, modalActive: false }
  );
  React.useEffect(() => {
    send({ type: "posts_requested" });
    setTimeout(() => {
      const res = {
        data: [
          {
            id: "0",
            linkImage: "http://placecorgi.com/200/200",
            title: "What a pup",
            details: "As you can see this is quite the pup",
            linkURL: "http://placecorgi.com/200/200"
          }
        ]
      };
      send({
        type: "posts_received",
        payload: res.data
      });
    }, 1000);
  }, []);
  React.useEffect(() => {
    send({
      type: "hyrdrated_state",
      payload: localStorage.getItem("cache")
    });
  }, []);
  React.useEffect(() => {
    localStorage.setItem("cache", JSON.stringify({ posts, modalActive }));
  }, [posts, modalActive]);

  return posts ? (
    <div className="App-header">
      {modalActive ? (
        <ModalBG>
          <Modal onClose={() => send({ type: "modal_closed" })} />
        </ModalBG>
      ) : null}
      {posts.map(p => (
        <Post post={p} key={p.id} />
      ))}
      <Button onClick={() => send({ type: "modal_opened" })}>➕</Button>
    </div>
  ) : (
    <span>Not even close baby</span>
  );
}

export default App;
