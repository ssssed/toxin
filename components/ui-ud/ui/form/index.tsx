'use client';

import { FC, useState } from 'react';
import './style.scss';

const Form: FC<Form> = ({ children, onSubmit }) => {
  return (
    <form
      className='form'
      onSubmit={onSubmit}
    >
      <div className='form__content'>{children}</div>
    </form>
  );
};

export default Form;
