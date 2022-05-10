import React from 'react';
import { StyledMainCWrapper } from './styles/mainC.styles';

import Join from './Join';
import Follow from './Follow';

const MainC = () => {
  return (
    <StyledMainCWrapper>
      <Join />
      <Follow />
    </StyledMainCWrapper>
  );
};

export default MainC;
