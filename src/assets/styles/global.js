import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.gradientBody[1]},
      ${({ theme }) => theme.colors.gradientBody[2]}
    );
  }
`;