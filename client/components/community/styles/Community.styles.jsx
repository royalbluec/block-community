import styled from '@emotion/styled';

export const StyledCommunityWrapper = styled.ul`
  display: flex;
  align-items: center;
  height: 4rem;
  overflow-x: hidden;

  & > li {
    height: 2.5rem;
    margin: 0rem 0.5rem;
  }

  & > li > a > button {
    height: 2.5rem;
    padding: 0 16px;
    border: 1px solid var(--white);
    border-radius: 1.25rem;
    font-size: 14px;
    background-color: var(--white);

    :hover {
      cursor: pointer;
      border: 1px solid var(--blue);
      background-color: var(--light-blue);
    }
  }

  .community__selected {
    border: 1px solid var(--blue);
    color: var(--blue);
    background-color: var(--light-blue);
  }
`;
