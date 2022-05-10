import React from 'react';
import { StyledJoinWrapper, StyledJoinItem } from './styles/Join.styles';

const Join = () => {
  const joinList = ['News', 'Game', 'Economy', 'Funny', 'Pics'];

  return (
    <StyledJoinWrapper>
      <h2>Communities to join</h2>
      <ul>
        {joinList.map((el, i) => (
          <StyledJoinItem key={i}>
            <a>{el}</a>
            <button>Join</button>
          </StyledJoinItem>
        ))}
      </ul>
      <a>See more</a>
    </StyledJoinWrapper>
  );
};

export default Join;
