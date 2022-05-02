export interface ThemeType {
  // Hedaer
  headerBackgroundColor: string;
  headerTextColor: string;
  headerHoverTextColor: string;
  headerHoverBackgroundColor: string;

  // DarkButton
  DarkBackgroundColor: string;
  DarkTextColor: string;

  // Body
  backgroundColor: string;
  textColor: string;
  buttonBackgroundColor: string;
  gradient: string;
}

// Laravel
export const lightTheme: ThemeType = {
  // Hedaer
  headerBackgroundColor: '#f9322c',
  headerTextColor: '#ececec',
  headerHoverTextColor: '#000000',
  headerHoverBackgroundColor: 'none',

  // DarkButton
  DarkBackgroundColor: '#000000',
  DarkTextColor: '#ffffffff',

  // Body
  backgroundColor: '#ffffff',
  textColor: '#000000',
  buttonBackgroundColor: '#777bb3',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

// PHP
export const darkTheme: ThemeType = {
  // Hedaer
  headerBackgroundColor: '#777bb3',
  headerTextColor: '#000000',
  headerHoverTextColor: '#000000',
  headerHoverBackgroundColor: '#f4f4f4',

  // DarkButton
  DarkBackgroundColor: '#000000',
  DarkTextColor: '#ffffffff',

  // Body
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
