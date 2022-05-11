import styled from '@emotion/styled';

export const StyledMainBWrapper = styled.div`
  flex: 2.5;

  & > div {
    padding: 0 1rem;

    @media (max-width: 1024px) {
      padding: 0 0 0 1rem;
    }

    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;
