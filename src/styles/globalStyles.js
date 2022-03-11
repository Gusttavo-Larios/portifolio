import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}

:root {
  font-size: 62.5%;
}

body {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

a, a:active {
    text-decoration: none;
}

`;
