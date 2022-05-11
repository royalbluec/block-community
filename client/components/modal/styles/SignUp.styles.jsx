import styled from '@emotion/styled';

export const StyledSignUpContainer = styled.div`
  padding: 1rem 0;
`;

export const StyledSignUpHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const StyledSignUpInput = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  background-color: var(--gray);
  outline: none;

  ::placeholder {
    color: var(--dark-gray);
  }
`;

export const StyledSignUpButton = styled.button`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.2rem;
  color: var(--white);
  background-color: var(--blue);

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const StyledSignUpFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;

  & > div {
    margin-left: 0.5rem;
    font-weight: 600;
    color: var(--blue);

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
