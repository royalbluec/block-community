import React, { useState } from 'react';

import { Block, Search, SignIn } from './styles/Header.styles';

import Modal from '../modal/Modal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Block>
      <div>
        <div>Logo</div>
        <div>
          <Search placeholder='Search' />
        </div>
        <div>
          <SignIn>Sign In</SignIn>
        </div>

        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          Hello from the modal!
        </Modal>
      </div>
    </Block>
  );
};

export default Header;
