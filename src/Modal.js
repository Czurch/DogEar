import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./App.css";
import styled from "styled-components";

const ModalCreatePost = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  background-color: #eeeeee;
  height: 40%;
  width: 40%;
  border-radius: 8%;
  transform: translate(-50%, -50%);
`;

const InputLine = styled.div`
  margin-bottom: 10px;

  & input {
    width: 50%;
    margin-left: 5px;
  }
`;

const ExitButton = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 80%;
  margin-top: 10px;

  outline-width: 0px;
`;

const Relative = styled.div`
  position: relative;
`;

const SubmitButton = styled.button`
  display: block;
  margin-left: 37.5%;
  width: 25%;
  height: 25%;
  border-radius: 5%;
  background-color: ghostwhite;
  border: none;
`;

function Modal({ send, onClose }) {
  const modalRef = React.useRef(null);
  const [title, setTitle] = useState("Title");
  //const [url, setUrl] = useState("URL");
  //const [tags, setTags] = useState("tag1,tag2");

  React.useEffect(() => {
    // Focus the modal on "mount"
    modalRef.current.focus();
  }, []);

  return (
    <ModalCreatePost onBlur={onClose} ref={modalRef}>
      <Relative>
        <ExitButton type="button" aria-label="Close" onClick={onClose}>
          <MdClose aria-hidden />
        </ExitButton>
        <form
          onSubmit={e => {
            // Do sumn here
            // Prevents the default behavior of the event.
            // The default behavior of a form submission
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit
            e.preventDefault();
          }}
        >
          <InputLine>
            <label>
              Title
              <input
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
              />
            </label>
          </InputLine>
          <InputLine>
            Link
            <input type="text" placeholder="URL" />
          </InputLine>
          <InputLine>
            Tags
            <input type="text" placeholder="tag1, tag2" />
          </InputLine>
          <SubmitButton>Submit</SubmitButton>
        </form>
      </Relative>
    </ModalCreatePost>
  );
}

export default Modal;
