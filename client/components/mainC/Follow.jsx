import React from 'react';
import { StyledFollowWrapper, StyledFollowItem } from './styles/Follow.styles';

const Follow = () => {
  const followList = ['paul', 'john', 'alice', 'chris', 'james'];

  return (
    <StyledFollowWrapper>
      <h2>People to follow</h2>
      {followList.map((el, i) => (
        <StyledFollowItem key={i}>
          <a>{el}</a>
          <button>Follow</button>
        </StyledFollowItem>
      ))}
      <a>See more</a>
    </StyledFollowWrapper>
  );
};

export default Follow;
