import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import {
  StyledModalOverlay,
  StyledModalWrapper,
  StyledModalHeader,
} from './styles/Modal.styles';

import SignIn from './SignIn';
import SignUp from './SignUp';

const Modal = ({ isOpen, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const modalWrapperRef = useRef(null);

  useEffect(() => {
    setIsBrowser(true);
    setIsSignIn(true);

    if (isOpen) {
      document.getElementById('__next').style = 'position: fixed';
    }
  }, [isOpen]);

  const clickCloseButton = (e) => {
    e.preventDefault();
    document.getElementById('__next').removeAttribute('style');
    onClose();
  };

  const clickBackDrop = (e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      document.getElementById('__next').removeAttribute('style');
      onClose();
    }
  };

  const clickIsSignIn = () => {
    setIsSignIn((prevState) => !prevState);
  };

  const modalContent = isOpen ? (
    <StyledModalOverlay onClick={clickBackDrop}>
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModalHeader>
          <a href='#' onClick={clickCloseButton}>
            x
          </a>
        </StyledModalHeader>
        {isSignIn ? (
          <SignIn clickIsSignIn={clickIsSignIn} />
        ) : (
          <SignUp clickIsSignIn={clickIsSignIn} />
        )}
      </StyledModalWrapper>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

// const StyledModalBody = styled.div`
//   padding-top: 10px;
// `;

// const StyledModalHeader = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   font-size: 25px;
// `;

// const StyledModalWrapper = styled.div`
//   width: 500px;
//   height: 600px;
// `;

// const StyledModal = styled.div`
//   background: white;
//   width: 500px;
//   height: 600px;
//   width: 100%;
//   height: 100%;
//   border-radius: 15px;
//   padding: 15px;
// `;

// const StyledModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

export default Modal;
