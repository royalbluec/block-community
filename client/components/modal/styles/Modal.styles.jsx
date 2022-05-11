import styled from '@emotion/styled';

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalWrapper = styled.div`
  background: var(--white);
  width: 400px;
  padding: 1rem;
  border-radius: 1rem;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`;
