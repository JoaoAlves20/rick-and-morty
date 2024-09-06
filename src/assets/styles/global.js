import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Courier New', Courier, monospace;
    }

    body {
      background: linear-gradient(
        45deg,
        ${theme.colors.backgroundGradient[1]},
        ${theme.colors.backgroundGradient[2]}
      );
    }
  `}
`;