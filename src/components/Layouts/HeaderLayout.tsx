import { Link, useLocation } from 'react-router-dom';
import { DarkModeButton, HeaderContaienr } from './Hedaer.Styled';

interface Props {
  toggleTheme: () => void;
  isLight: boolean;
}

function HeaderLayout({ toggleTheme, isLight }: Props) {
  const { pathname } = useLocation();
  return (
    <HeaderContaienr>
      <div className="logo">
        <h1>Reactjs.kr</h1>
      </div>
      <div className="header_nav">
        <Link to="/kkyungvelyy" className={`${pathname.includes('kkyungvelyy') ? 'active' : ''} nav_link`}>
          Kkyungvelyy
        </Link>
        <Link to="/laravel" className={`${pathname.includes('laravel') ? 'active' : ''} nav_link`}>
          laravel
        </Link>
        <Link to="/react" className={`${pathname.includes('react') ? 'active' : ''} nav_link`}>
          react
        </Link>
      </div>
      <div className="header_button">
        <a target="_blank" href="https://github.com/kyungseo-park/reactjs.kr" rel="noreferrer">
          GitHub
        </a>
        <DarkModeButton type="button" onClick={() => toggleTheme()} isLight={isLight}>
          {isLight ? '다크' : '화이트'}
        </DarkModeButton>
      </div>
    </HeaderContaienr>
  );
}

export default HeaderLayout;
