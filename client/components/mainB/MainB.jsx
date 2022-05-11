import React from 'react';
import { StyledMainBWrapper } from './styles/MainB.styles';

import Create from './Create';
import Tab from './Tab';
import Board from './Board';

const MainB = () => {
  return (
    <StyledMainBWrapper>
      <div>
        <Create />
        <Tab />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
      </div>
    </StyledMainBWrapper>
  );
};

export default MainB;
