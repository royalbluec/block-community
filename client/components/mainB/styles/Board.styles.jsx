import styled from '@emotion/styled';

export const StyledBoardWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--white);

  .board__icon {
    color: var(--dark-gray);
    width: 20px;
    height: 20px;
  }
`;

export const StyledBoardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  /* temp */
  & > span {
    margin-right: 0.75rem;

    :hover {
      cursor: pointer;
    }
  }

  & > div > p {
    font-weight: 600;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  & > div > div {
    display: flex;
  }

  & > div > div > p {
    font-weight: 600;
    color: var(--blue);
    margin-right: 0.5rem;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  & > div > div > span {
    color: var(--dim-gray);

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const StyledBoardBody = styled.div`
  & > h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  & > p {
    word-wrap: break-word;
  }
`;

export const StyledBoardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  & > a {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    color: var(--dim-gray);

    :hover {
      background-color: var(--light-blue);
    }
  }

  & > a > div {
    margin-left: 0.5rem;

    @media (max-width: 480px) {
      display: none;
    }
  }
`;
