import React, { useState } from 'react';

import { HeaderWrapper, Search, SignIn } from './styles/Header.styles';

import Modal from '../modal/Modal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HeaderWrapper>
      <div>
        <div>Logo</div>
        <div>
          <Search placeholder='Search' />
        </div>
        <div>
          <SignIn onClick={() => setShowModal(true)}>Sign In</SignIn>
        </div>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          Hello from the modal!
        </Modal>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
