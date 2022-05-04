import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  background-color: #ffffff;

  & > div > div {
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 1.2rem;

    :hover {
      cursor: pointer;
    }
  }

  .tab__selected {
    font-weight: 600;
    background-color: #f1f2f3;
  }
`;
