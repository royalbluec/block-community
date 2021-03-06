import React from 'react';

import { StyledCommunityWrapper } from './styles/Community.styles';

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
    <StyledCommunityWrapper>
      {communityList.map((el, i) => (
        <li key={i}>
          <a>
            {i === 0 ? (
              <button className='community__selected'>{el}</button>
            ) : (
              <button>{el}</button>
            )}
          </a>
        </li>
      ))}
    </StyledCommunityWrapper>
  );
};

export default Community;
