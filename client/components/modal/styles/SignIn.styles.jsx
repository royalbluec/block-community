import styled from '@emotion/styled';

export const StyledSignInHeader = styled.h2`
  font-size: 2rem;
`;

export const StyledSignInInput = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.75rem;
  background-color: #f1f2f3;
  outline: none;
  font-size: 1rem;

  ::placeholder {
    color: #a6abb5;
  }
`;

export const StyledSignInButton = styled.button`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.75rem;
  background-color: #316bd0;
  font-size: 1.2rem;
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const StyledSignInFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;

  & > div {
    margin-left: 0.5rem;
    font-weight: 600;
    color: #316bd0;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
