import React from 'react';
import { Block } from './styles/MainB.styles';

import Create from './Create';
import Tab from './Tab';
import Board from './Board';

const MainB = () => {
  return (
    <Block>
      <div>
        <Create />
        <Tab />
        <Board />
        <Board />
        <Board />
        <Board />
        <Board />
      </div>
    </Block>
  );
};

export default MainB;
