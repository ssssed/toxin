'use client';

import { useEffect } from 'react';
import WOW from 'wow.js';
import './style.scss';
import 'animate.css';

const Description = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <p className='landing__text wow animate__animated animate__fadeInRight'>
      Лучшие номера для вашей работы, отдыха и просто вдохновения
    </p>
  );
};

export default Description;
