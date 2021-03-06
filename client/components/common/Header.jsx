import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { HeaderWrapper, Search, SignIn } from './styles/Header.styles';

import Modal from '../modal/Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div>
        <div>Logo</div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search__icon' />
          <Search placeholder='Search' />
        </div>
        <div>
          <SignIn onClick={() => setIsOpen(true)}>Sign In</SignIn>
        </div>
        <Modal onClose={() => setIsOpen(false)} isOpen={isOpen} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
