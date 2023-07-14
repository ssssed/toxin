import Image from 'next/image';
import Link from 'next/link';

const HeaderNav = () => {
  return (
    <nav className='header__nav'>
      <Link
        href='#'
        className='header__nav-link'
      >
        О нас
      </Link>
      <Link
        href='#'
        className='header__nav-list'
      >
        Услуги
        <Image
          src='/accordion.svg'
          alt='accordion'
          width={12}
          height={12}
        />
      </Link>
      <Link
        href='#'
        className='header__nav-link'
      >
        Вакансии
      </Link>
      <Link
        href='#'
        className='header__nav-link'
      >
        Новости
      </Link>
      <Link
        href='#'
        className='header__nav-list'
      >
        Соглашения
        <Image
          src='/accordion.svg'
          alt='accordion'
          width={12}
          height={12}
        />
      </Link>
    </nav>
  );
};

export { HeaderNav };
