import styled from '@emotion/styled';

export const StyledCreateWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--white);
  margin-bottom: 1rem;

  & > div {
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    background-color: var(--gray);
    color: var(--dark-gray);
    font-size: 1.2rem;

    :hover {
      cursor: pointer;
    }
  }
`;
