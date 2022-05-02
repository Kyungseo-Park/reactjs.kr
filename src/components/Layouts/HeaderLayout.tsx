import { DarkModeToggleButton } from 'styles/global';

interface Props {
  toggleTheme: () => void;
  isLight: boolean;
}

function HeaderLayout({ toggleTheme, isLight }: Props) {
  return (
    <DarkModeToggleButton type="button" onClick={() => toggleTheme()} isLight={isLight}>
      {isLight ? '다크' : '화이트'}
    </DarkModeToggleButton>
  );
}

export default HeaderLayout;
