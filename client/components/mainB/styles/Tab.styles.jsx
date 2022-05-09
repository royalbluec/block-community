import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  background-color: #ffffff;

  & > div > div {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border-radius: 2rem;
    font-size: 1.2rem;

    :hover {
      cursor: pointer;
      background-color: #f1f2f3;
    }
  }

  .tab__selected {
    font-weight: 600;
    background-color: #f1f2f3;
  }
`;
