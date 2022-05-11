import styled from '@emotion/styled';

export const StyledCommunityWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;

  & > div {
    height: 2.25rem rem;
    margin: 0rem 0.5rem;
  }

  & > div > a > button {
    height: 2.5rem;
    padding: 0 16px;
    border: 1px solid #ffffff;
    border-radius: 1.25rem;
    font-size: 14px;
    background-color: #ffffff;

    :hover {
      cursor: pointer;
      border: 1px solid #316bd0;
      background-color: #d5e1f6;
    }
  }

  .community__selected {
    border: 1px solid #316bd0;
    color: #316bd0;
    background-color: #d5e1f6;
  }
`;
