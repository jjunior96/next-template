import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* h1 {
      color: ${theme.colors.white};
    } */
  `}
`;
