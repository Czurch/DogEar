import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "react-crud-icons";

import "../node_modules/react-crud-icons/dist/css/react-crud-icons.css";

const PostContainer = styled.div`
  flex: auto
  overflow: hidden;
  width: 300px;
  min-height: 300px;
  margin: 10px;
  border-radius: 5px;
  background-color: #262626;

  color: white;
  text-decoration: none;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;

  &:hover {
    margin-top: 8px;
    box-shadow: -9px 12px 28px -16px rgba(0, 0, 0, 0.89);
    background-color: #181818;
  }

  & img {
    width: 100%;
    max-height: 200px;
  }

  & h3 {
    margin-top: 0px;
    margin-left: 5px;
  }

  & p {
    font-size: 12px;
  }

  & Icon {
    max-height: 50px;
    max-width: 50px;
    background-color: #dd0000;
  }

  & Icon:hover {
    background-color: #ff0000;
  }
`;

function Post({ post: { id, linkImage, title, details, linkURL }, onClick }) {
  return (
    <PostContainer>
      <a href={linkURL}>
        <img src={linkImage} alt="" />
        <h3>{title}</h3>
        <p>{linkURL}</p>
        <p>{details}</p>
      </a>
      <Icon name="delete" theme="dark" size="medium" onClick={onClick} />
    </PostContainer>
  );
}

export default Post;
