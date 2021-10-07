import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#F7F9F8',
    li: '#081c15',
    a: '#081c15',
    button:'#8CC96D',
    input: '#e5e5e5',
    label: '#F7F9F8',
}

export const darkTheme = {
    body: '#081c15',
    li: '#F7F9F8',
    a: '#F7F9F8',
    p: '#F7F9F8',
    button: '#478E23',
    input: '#F7F9F8',
    label: '#F7F9F8',
}

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