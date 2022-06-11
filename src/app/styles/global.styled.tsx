import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  :root {
    font-size: ${({theme}) => theme.fontSize};
  }


  body,html, #root {
    height: 100;
  }

  body {
    font-family: sans-serif;
    background-color: ${({theme}) => theme.colors.background};
  }
`;
