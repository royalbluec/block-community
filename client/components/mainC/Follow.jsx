import React from 'react';
import { Block, Item } from './styles/Follow.styles';

const Follow = () => {
  const followList = ['paul', 'john', 'alice', 'chris', 'james'];

  return (
    <Block>
      <div>People to follow</div>
      {followList.map((el) => (
        <Item key={el}>
          <div>{el}</div>
          <button>Follow</button>
        </Item>
      ))}
      <div>See more</div>
    </Block>
  );
};

export default Follow;
