import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import HeaderNav from './header-nav';
import HeaderButtons from './header-buttons';

const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>
        <Image
          src='/header-logo.svg'
          alt='logo'
          width={105}
          height={40}
        />
      </Link>
      <HeaderNav />
      <HeaderButtons />
    </header>
  );
};

export default Header;
