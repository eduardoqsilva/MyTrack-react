import { createGlobalStyle } from "styled-components";
import { colors, font } from "./variables";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.gray1};

    font-family: ${font.default};
    color: ${colors.gray7};
    line-height: 160%;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${colors.blu_dark}
  }
`