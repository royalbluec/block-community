import styled from '@emotion/styled';

export const Block = styled.div`
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  margin-bottom: 1rem;

  & > div:first-of-type {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  & > div:last-of-type {
    margin-top: 0.5rem;
    color: #316bd0;
    font-size: 1.1rem;
    font-weight: 600;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.625rem 0px;

  & > div {
    :hover {
      text-decoration: underline;
    }
  }

  & > button {
    width: 6rem;
    height: 2rem;
    border: 0;
    border-radius: 1rem;
    background-color: #316bd0;
    font-size: 1rem;
    color: white;

    :hover {
      cursor: pointer;
      background-color: rgba(49, 107, 208, 0.5);
    }
  }

  :hover {
    cursor: pointer;
  }
`;
