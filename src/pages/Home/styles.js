import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ContainerLink = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    display: flex;
    align-items: center;
    width: 180px;
    justify-content: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${theme.colors.text};
      font-weight: bold;
    }
  `}
`;