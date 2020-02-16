import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PostContainer = styled.div`
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
`;

function Post({ post: { linkImage, title, details, linkURL } }) {
  return (
    <a href={linkURL}>
      <PostContainer>
        <img src={linkImage} alt="" />
        <h3>{title}</h3>
        <p>{details}</p>
        <p>{linkURL}</p>
      </PostContainer>
    </a>
  );
}

export default Post;
