import React, {useState} from "react";
import Components from "./Components";
import { GlobalStyle, darkTheme, lightTheme } from "./GlobalStyle";
import {ThemeProvider} from "styled-components";


function App() {

  const [theme, setTheme] = useState('light');

  const handleToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Components handleToggle={handleToggle}/>
    </ThemeProvider>
  );
}

export default App;
