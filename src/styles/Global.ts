import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.gray1};

    font-family: 'Roboto', sans-serif;
    color: ${colors.gray7}
  }
`