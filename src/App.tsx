import HeaderLayout from 'components/Layouts/HeaderLayout';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, MainCopmonent } from 'styles/global';
import { darkTheme, lightTheme } from 'styles/theme';
import { Outlet as BodyComponent } from 'react-router-dom';

function App() {
  // 이거 로직 바꿔야함 UX 에 별로임
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // ㅈㅅ
    const localTheme: any = localStorage.getItem('theme');
    setTheme(localTheme);
  }, [theme]);

  const isLight: boolean = theme === 'light';
  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
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
