import React from 'react';
import { Block } from './styles/Tab.styles';

const Tab = () => {
  const tabList = ['Trending', 'New', 'Top', 'Discussed'];

  return (
    <Block>
      {tabList.map((el, idx) => (
        <div key={el}>
          {idx === 0 ? (
            <div className='tab__selected' key={el}>
              {el}
            </div>
          ) : (
            <div key={el}>{el}</div>
          )}
        </div>
      ))}
      <div></div>
    </Block>
  );
};

export default Tab;
