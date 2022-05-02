import HeaderLayout from 'components/Layouts/HeaderLayout';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, DarkModeToggleButton } from 'styles/global';
import { darkTheme, lightTheme } from 'styles/theme';
import './App.css';

function App() {
  // TODO:: Status 로 관리하면 좋을 듯
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const isLight: boolean = theme === 'light';
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <HeaderLayout toggleTheme={toggleTheme} isLight={isLight} />
    </ThemeProvider>
  );
}

export default App;
