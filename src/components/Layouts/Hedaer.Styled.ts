import styled from 'styled-components';
import { ThemeType } from 'styles/theme';

export const HeaderContaienr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2);
  width: 100vw;
  position: fixed;
  background: ${({ theme }: { theme: ThemeType }) => theme.headerBackgroundColor};
  transition: all 0.5s ease-in-out;
  /* background: ${({ theme }: { theme: ThemeType }) => theme.backgroundColor};
  height: 120px;
  width: 100%; */

  .logo > h1 {
    cursor: pointer;
  }

  .header_nav {
    display: flex;
    align-items: center;
    justify-content: center;

    .nav_link {
      margin: 0 10px;
      color: ${({ theme }: { theme: ThemeType }) => theme.headerTextColor};
      padding: 5px 15px;
      border-radius: 100px;
      transition: all 0.5s ease-in-out;
      text-decoration: none;
    }

    .nav_link.active,
    .nav_link:hover {
      background-color: ${({ theme }: { theme: ThemeType }) => theme.headerHoverBackgroundColor};
      color: ${({ theme }: { theme: ThemeType }) => theme.headerHoverTextColor};
    }
  }

  .header_button {
    a {
      margin: 0px 10px;
    }
  }
`;

export const DarkModeButton = styled.button<{ isLight: boolean }>`
  background: ${({ theme }: { theme: ThemeType }) => theme.DarkBackgroundColor};
  color: ${({ theme }: { theme: ThemeType }) => theme.DarkTextColor};
`;
