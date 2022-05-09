import styled from '@emotion/styled';

export const CategoryWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  font-size: 1.2rem;

  & > a {
    display: block;
    height: 3rem;
  }

  & > a > div {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1rem;
    border-radius: 0.75rem;
    font-weight: 600;

    :hover {
      cursor: pointer;
      background-color: #d5e1f6;
    }
  }

  .category__selected {
    color: #316bd0;
  }
`;
