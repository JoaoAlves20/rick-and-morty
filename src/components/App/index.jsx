import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../assets/styles/global";

import { styleDefault } from '../../assets/styles/default'

import Header from "../Header";
import Router from "../../Routes";

export default function App() {
  return (
    <ThemeProvider theme={styleDefault}>
      <GlobalStyle />
      <Header />
      <Router />
    </ThemeProvider>
  )
}