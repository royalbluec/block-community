import React from 'react';

import { StyledCategoryWrapper } from './styles/Category.styles';

const Category = () => {
  const sideList = ['All', 'Discover', 'About', 'FAQ'];

  return (
    <StyledCategoryWrapper>
      {sideList.map((el, i) => (
        <a key={i}>
          {i === 0 ? (
            <div className='category__selected'>{el}</div>
          ) : (
            <div key={el}>{el}</div>
          )}
        </a>
      ))}
    </StyledCategoryWrapper>
  );
};

export default Category;
