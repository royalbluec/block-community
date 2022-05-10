import styled from '@emotion/styled';

export const StyledFollowWrapper = styled.div`
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--white);
  margin-bottom: 1rem;

  & > h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  & > a {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--blue);

    :hover {
      text-decoration: underline;
    }
  }
`;

export const StyledFollowItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  & > a {
    font-weight: 600;

    :hover {
      text-decoration: underline;
    }
  }

  & > button {
    width: 100px;
    height: 2rem;
    border-radius: 1rem;
    font-size: 1rem;
    color: var(--white);
    background-color: var(--blue);

    :hover {
      opacity: 0.5;
    }
  }

  :hover {
    cursor: pointer;
  }
`;
