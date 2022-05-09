import React from 'react';

import { CategoryWrapper } from './styles/Category.styles';

const Category = () => {
  const sideList = ['All', 'Discover', 'About', 'FAQ'];

  return (
    <CategoryWrapper>
      {sideList.map((el, i) => (
        <a key={el}>
          {i === 0 ? (
            <div className='category__selected'>{el}</div>
          ) : (
            <div key={el}>{el}</div>
          )}
        </a>
      ))}
    </CategoryWrapper>
  );
};

export default Category;
