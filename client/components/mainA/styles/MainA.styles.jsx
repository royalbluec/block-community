import styled from '@emotion/styled';

export const Block = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    padding-left: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
