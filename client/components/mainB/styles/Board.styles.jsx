import styled from '@emotion/styled';

export const StyledBoardWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
`;

export const StyledBoardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  & > div:first-of-type {
    margin-right: 0.75rem;
  }

  & > div > div {
    display: flex;
  }

  & > div > div > div:first-of-type {
    margin-right: 0.75rem;
  }
`;

export const StyledBoardBody = styled.div`
  & > div:first-of-type {
    font-size: 1.2rem;
    font-weight: 600;
  }

  & > div:nth-child(2) {
    margin: 1rem 0;
    word-wrap: break-word;
  }

  & > div:last-of-type {
    display: flex;

    & > div {
      margin-right: 1rem;
    }
  }
`;

export const StyledBoardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  & > div {
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    color: #6f7786;

    :hover {
      cursor: pointer;
      background-color: #d5e1f6;
    }
  }
`;
