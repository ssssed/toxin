import Link from 'next/link';

const HeaderButtons = () => {
  return (
    <div className='header__buttons'>
      <Link href='/login'>
        <button className='header__button header__login'>войти</button>
      </Link>
      <Link href='/register'>
        <button className='header__button header__register'>
          зарегистрироваться
        </button>
      </Link>
    </div>
  );
};

export default HeaderButtons;
