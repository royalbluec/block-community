import React from 'react';
import { StyledTabWrapper, StyledTabItem } from './styles/Tab.styles';

const Tab = () => {
  const tabList = ['Trending', 'New', 'Top', 'Discussed'];

  return (
    <StyledTabWrapper>
      <ul>
        {tabList.map((el, i) => (
          <StyledTabItem key={i}>
            {i === 0 ? (
              <a className='tab__selected' key={el}>
                {el}
              </a>
            ) : (
              <a>{el}</a>
            )}
          </StyledTabItem>
        ))}
      </ul>
      <div></div>
    </StyledTabWrapper>
  );
};

export default Tab;
