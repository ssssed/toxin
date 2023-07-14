import Image from 'next/image';
import React from 'react';
import './style.scss';

const FooterCopyrightBar = () => {
  return (
    <div className='copyright-bar'>
      <p className='copyright-bar__text'>
        Copyright &#169; 2023 Toxin отель. Все права защищены
      </p>
      <ul className='copyright-bar__logos'>
        <li className='copyright-bar__logo'>
          <Image
            src='/twitter.svg'
            alt='twitter'
            width={24}
            height={24}
          />
        </li>
        <li className='copyright-bar__logo'>
          <Image
            src='/facebook.svg'
            alt='facebook'
            width={24}
            height={24}
          />
        </li>
        <li className='copyright-bar__logo'>
          <Image
            src='/instagram.svg'
            alt='instagram'
            width={24}
            height={24}
          />
        </li>
      </ul>
    </div>
  );
};

export { FooterCopyrightBar };
