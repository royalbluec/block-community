import styled from '@emotion/styled';

export const Block = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  height: 4rem;
  background-color: white;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* max-width: 84.5rem; */
    margin: 0 20rem;
    padding: 0 1rem;
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Search = styled.input`
  width: 20rem;
  height: 2.5rem;
  padding: 0 40px;
  border: 2px solid #f1f2f3;
  border-radius: 0.75rem;
  background-color: #f1f2f3;
  font-size: 1rem;
  color: #a6abb5;
  outline: none;

  :focus {
    border: 2px solid #316bd0;
  }

  ::placeholder {
    color: #a6abb5;
  }
`;

export const SignIn = styled.button`
  width: 8rem;
  height: 2.5rem;
  border: 0;
  border-radius: 0.75rem;
  background-color: #316bd0;
  font-size: 1rem;
  color: white;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
