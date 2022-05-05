import React from 'react';
import { Block, Item } from './styles/Join.styles';

const Join = () => {
  const joinList = ['News', 'Game', 'Economy', 'Funny', 'Pics'];

  return (
    <Block>
      <div>Communities to join</div>
      {joinList.map((el) => (
        <Item key={el}>
          <div>{el}</div>
          <button>Join</button>
        </Item>
      ))}
      <div>See more</div>
    </Block>
  );
};

export default Join;
