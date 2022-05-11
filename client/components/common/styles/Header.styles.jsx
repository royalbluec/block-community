import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  width: 100vw;
  max-width: 100%;
  height: 4rem;
  background-color: var(--white);

  & > div {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  & > div > div {
    position: relative;
    display: flex;
    align-items: center;
  }

  .search__icon {
    position: absolute;
    left: 12px;
    color: var(--dark-gray);
    width: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Search = styled.input`
  width: 20rem;
  height: 2.5rem;
  padding: 0 40px;
  border: 2px solid var(--gray);
  border-radius: 0.75rem;
  background-color: var(--gray);
  font-size: 1rem;
  color: #a6abb5;
  outline: none;

  :focus {
    border: 2px solid var(--blue);
  }

  ::placeholder {
    color: var(--dark-gray);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SignIn = styled.button`
  width: 8rem;
  height: 2.5rem;
  border: 0;
  border-radius: 0.75rem;
  background-color: var(--blue);
  font-size: 1rem;
  color: var(--white);

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
