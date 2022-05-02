import HeaderLayout from 'components/Layouts/HeaderLayout';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, MainCopmonent } from 'styles/global';
import { darkTheme, lightTheme } from 'styles/theme';
import { Outlet as BodyComponent } from 'react-router-dom';

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
      <MainCopmonent>
        <BodyComponent />
      </MainCopmonent>
    </ThemeProvider>
  );
}

export default App;
