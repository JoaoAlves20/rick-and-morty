import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    
    h1 {
      font-size: 74px;
      box-shadow: ${theme.boxShadow};
      padding: 15px;
      border-radius: 15px;
      background: ${theme.colors.background};
    }
  `};
`;