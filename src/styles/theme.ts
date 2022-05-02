export interface ThemeType {
  backgroundColor: string;
  textColor: string;
  buttonBackgroundColor: string;
  gradient: string;
}

export const lightTheme: ThemeType = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  buttonBackgroundColor: '#777bb3',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme: ThemeType = {
  backgroundColor: '#060606',
  textColor: '#FFFFFF',
  buttonBackgroundColor: '#ff2d20',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
