import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1, h2, h3{
    font-family: 'Merienda', cursive;
    }
    p, a{
    font-family: 'Gemunu Libre', sans-serif;
    font-size: large;
    }
`

export default GlobalStyle;