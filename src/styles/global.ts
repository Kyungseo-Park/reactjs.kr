import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    	margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }: { theme: ThemeType }) => theme.backgroundColor};
        margin: 0;
        padding: 0;
        color: ${({ theme }: { theme: ThemeType }) => theme.textColor};
    }
    button { 
        color: ${({ theme }: { theme: ThemeType }) => theme.backgroundColor};
        background-color: ${({ theme }: { theme: ThemeType }) => theme.textColor};
    }
`;

export const DarkModeToggleButton = styled.button<{ isLight: boolean }>`
  background: ${({ theme }: { theme: ThemeType }) => theme.buttonBackgroundColor};
`;
