import styled from '@emotion/styled';

export const Block = styled.div`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  margin-bottom: 1rem;

  & > div {
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    background-color: #f1f2f3;
    color: #a6abb5;
    font-size: 20px;

    :hover {
      cursor: pointer;
    }
  }
`;
