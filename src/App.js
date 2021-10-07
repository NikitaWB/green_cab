import React from "react";
import Components from "./Components";
import GlobalStyle from "./GlobalStyle";
/* import styled, {ThemeProvider} from "styled-components"; */


function App() {
/*   const [theme, setTheme] = useState('light')

  const handleToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  } */

  /* <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}></ThemeProvider> */

  return (
    <>
      <GlobalStyle />
      <Components />
    </>
  );
}

export default App;
