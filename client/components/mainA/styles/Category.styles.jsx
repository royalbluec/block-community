import styled from '@emotion/styled';

export const StyledCategoryWrapper = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--white);
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
      background-color: var(--light-blue);
    }
  }

  .category__selected {
    color: var(--blue);
  }
`;
