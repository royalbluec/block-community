import styled from '@emotion/styled';

export const StyledTabWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  background-color: var(--white);

  & > ul {
    display: flex;
  }
`;

export const StyledTabItem = styled.li`
  & > a {
    display: block;
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 1.2rem;

    :hover {
      background-color: var(--gray);
    }
  }

  .tab__selected {
    font-weight: 600;
    background-color: var(--gray);
  }
`;
