import React from 'react';

import { Block } from './styles/Community.styles';

const Community = () => {
  const communityList = [
    'Home',
    'GM',
    'News',
    'Game',
    'Economy',
    'Funny',
    'Pics',
    'Korean',
  ];

  return (
    <Block>
      {communityList.map((el, i) => (
        <div key={el}>
          <a>
            {i === 0 ? (
              <button className='community__selected'>{el}</button>
            ) : (
              <button>{el}</button>
            )}
          </a>
        </div>
      ))}
    </Block>
  );
};

export default Community;
