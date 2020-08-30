import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "react-crud-icons";

import "../node_modules/react-crud-icons/dist/css/react-crud-icons.css";

const PostContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  min-height: 300px;
  margin: 10px;
  border-radius: 5px;
  background-color: #262626;
  clip-path: circle(78% at 40% 60%);

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
    position: relative;
    right: 0;
    bottom: 0;
    max-height: 50px;
    max-width: 50px;
    background-color: #dd0000;
  }

  & Icon:hover {
    background-color: #ff0000;
  }
`;

const TopRightTriangle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-bottom: 30px solid #ffffff;
  border-right: 30px solid transparent;
`;

function Post({ post: { linkImage, title, details, linkURL }, onClick }) {
  return (
    <PostContainer>
      <TopRightTriangle />
      <a href={linkURL}>
        <img src={linkImage} alt="" />
        <h3>{title}</h3>
        <p>{linkURL}</p>
        <p>{details}</p>
      </a>
      <div className="removeIcon">
        <Icon name="delete" theme="dark" size="medium" onClick={onClick} />
      </div>
    </PostContainer>
  );
}

export default Post;
