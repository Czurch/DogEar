import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./App.css";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

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

function Modal({ onSubmit, onClose }) {
  const modalRef = React.useRef(null);
  const [linkImage, setlinkImage] = useState("http://placecorgi.com/200/200");
  const [title, setTitle] = useState("");
  const [linkURL, setlinkURL] = useState("");
  const [details, setDetails] = useState("");

  React.useEffect(() => {
    // Focus the modal on "mount"
    modalRef.current.focus();
  }, []);

  return (
    <ModalCreatePost ref={modalRef}>
      <Relative>
        <ExitButton type="button" aria-label="Close" onClick={onClose}>
          <MdClose aria-hidden />
        </ExitButton>
        <form>
          <InputLine>
            <label>
              Title
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </InputLine>
          <InputLine>
            Link
            <input
              type="text"
              placeholder="URL"
              value={linkURL}
              onChange={(e) => setlinkURL(e.target.value)}
            />
          </InputLine>
          <InputLine>
            Details
            <input
              type="text"
              placeholder="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </InputLine>
          <SubmitButton
            onClick={() =>
              onSubmit({
                id: uuid(),
                linkImage,
                title,
                details,
                linkURL,
              })
            }
          >
            Submit
          </SubmitButton>
        </form>
      </Relative>
    </ModalCreatePost>
  );
}

export default Modal;
