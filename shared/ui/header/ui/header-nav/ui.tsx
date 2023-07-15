import Image from 'next/image';

const HeaderNav = () => {
  return (
    <nav className='header__nav'>
      <p className='header__nav-link'>О нас</p>
      <p className='header__nav-list'>
        Услуги
        <Image
          src='/accordion.svg'
          alt='accordion'
          width={12}
          height={12}
        />
      </p>
      <p className='header__nav-link'>Вакансии</p>
      <p className='header__nav-link'>Новости</p>
      <p className='header__nav-list'>
        Соглашения
        <Image
          src='/accordion.svg'
          alt='accordion'
          width={12}
          height={12}
        />
      </p>
    </nav>
  );
};

export { HeaderNav };
