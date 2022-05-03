import React from 'react';

import { Block, Search, SignIn } from './styles/Header.styles';

const Header = () => {
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
      </div>
    </Block>
  );
};

export default Header;
