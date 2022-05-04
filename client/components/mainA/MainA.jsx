import React from 'react';
import { Block } from './styles/MainA.styles';

const MainA = () => {
  const sideList = ['All', 'Discover', 'About', 'FAQ'];

  return (
    <Block>
      {sideList.map((el, i) => (
        <a key={el}>
          {i === 0 ? (
            <div className='selected'>{el}</div>
          ) : (
            <div key={el}>{el}</div>
          )}
        </a>
      ))}
    </Block>
  );
};

export default MainA;
