import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import { HeaderNav, HeaderButtons } from './ui/';
import { paths } from '@/shared/routing';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link href={paths.home}>
          <Image
            src='/header-logo.svg'
            alt='logo'
            width={105}
            height={40}
          />
        </Link>
        <HeaderNav />
        <HeaderButtons />
      </div>
    </header>
  );
};

export { Header };
