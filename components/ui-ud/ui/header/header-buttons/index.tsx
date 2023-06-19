import Link from 'next/link';
import { Button } from '@/components/ui-ud/ui';

const HeaderButtons = () => {
  return (
    <div className='header__buttons'>
      <Link href='/login'>
        <Button
          type='default'
          className='header__button header__login'
        >
          войти
        </Button>
      </Link>
      <Link href='/register'>
        <Button
          type='painted'
          className='header__button header__register'
        >
          зарегистрироваться
        </Button>
      </Link>
    </div>
  );
};

export default HeaderButtons;
