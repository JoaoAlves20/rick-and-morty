import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.primaryColors[1]};
  }
`;