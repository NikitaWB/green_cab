import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const lightTheme = {
    body: '#F7F9F8' /* '#DBF5AE' */,
    a: '#081c15',
    button:'#8CC96D',
    input: '#e5e5e5',
    label: '#F7F9F8',
}

export const darkTheme = {
    body: '#081c15',
    h2: '#FFFFFF' ,
    h3: '#FFFFFF' ,
    a: '#F7F9F8',
    p: 'white',
    input: '#F7F9F8',
    label: '#FFFFFF',
}

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${props => props.theme.body};
}
h1, h2, h3{
    font-family: 'Indie Flower', cursive;
    color: ${props => props.theme.h3};
    }
    p, a, label{
    font-family: 'Roboto', sans-serif;
    font-size: large;
    color: ${props => props.theme.p};
    }
`
export const Button = styled.button`
  background: linear-gradient(180deg, #8CC96D 0%, #478E23 100%);
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  width: 216px;
  height: 45px;
  margin: 15px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.25);
  bottom: 0;
  cursor: pointer;
`