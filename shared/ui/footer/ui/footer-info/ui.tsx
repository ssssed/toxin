import Image from 'next/image';
import './style.scss';
import { Label } from '@/shared/ui/label';

const FooterInfo = () => {
  const navigations: string[] = [
    'О нас',
    'Новости',
    'Служба поддержки',
    'Услуги',
  ];

  const abouts: string[] = [
    'О сервисе',
    'Наша команда',
    'Вакансии',
    'Инвесторы',
  ];

  const supports: string[] = ['Соглашения', 'Сообщества', 'Связь с нами'];

  const subscribes: string[] = [
    'Получайте специальные предложения и новости сервиса',
  ];

  return (
    <div className='widgets'>
      <div className='widgets__container'>
        <div className='widgets__info'>
          <Image
            src='/footer-logo.svg'
            alt='footer logo'
            width={105}
            height={40}
          />
          <p className='widgets__title'>
            Бронирование номеров в лучшем отеле 2023 года по версии ассоциации
            «Отельные взгляды»
          </p>
        </div>
        <nav className='widgets__columns'>
          <Label>навигация</Label>
          {navigations.map(nav => (
            <li key={nav}>
              <p className='widgets__text'>{nav}</p>
            </li>
          ))}
        </nav>
        <ul className='widgets__columns'>
          <Label>о нас</Label>
          {abouts.map(about => (
            <li key={about}>
              <p className='widgets__text'>{about}</p>
            </li>
          ))}
        </ul>
        <ul className='widgets__columns'>
          <Label>служба поддержки</Label>
          {supports.map(support => (
            <li key={support}>
              <p className='widgets__text'>{support}</p>
            </li>
          ))}
        </ul>
        <ul className='widgets__columns'>
          <Label>подписка</Label>
          {subscribes.map(sub => (
            <li key={sub}>
              <p className='widgets__text'>{sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { FooterInfo };
