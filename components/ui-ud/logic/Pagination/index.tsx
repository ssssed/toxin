'use client';

import React, { FC, memo, useEffect, useState } from 'react';
import { useMatchMedia } from '@/hook';
import './style.scss';

type PaginationRenderButton = Array<number | string>;

const Pagination: FC<Pagination> = ({
  elementPerPage,
  totalPage,
  currentPage,
  setCurrentPage,
  buttonClass = '',
  navigationButtonClass = '',
  buttonActiveClass = '',
  navigationNextContent = 'Вперед',
  navigationPrevContent = 'Назад',
  paginationClass = '',
}) => {
  const isDesktopResolution = useMatchMedia('(min-width:1023px)', true);

  const numberOfPages: PaginationRenderButton = [];
  for (let i = 1; i <= totalPage; i++) {
    numberOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] =
    useState<PaginationRenderButton>([]);

  const handleNext = () => {
    console.log('click');
    setCurrentButton(prev => (prev >= numberOfPages.length ? prev : prev + 1));
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentButton(prev => (prev <= 1 ? prev : prev - 1));
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    let tempNumberOfPages: PaginationRenderButton = [...arrOfCurrButtons];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton.toString() === dotsInitial) {
      setCurrentButton(+arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton.toString() === dotsRight) {
      setCurrentButton(+arrOfCurrButtons[3] + 2);
    } else if (currentButton.toString() === dotsLeft) {
      setCurrentButton(+arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    // setCurrentPage(currentButton);
  }, [currentButton, isDesktopResolution, elementPerPage]);

  return (
    <div className={`pagination ${paginationClass}`}>
      {currentPage !== 1 && (
        <button
          className={navigationButtonClass}
          onClick={handlePrev}
        >
          {navigationPrevContent}
        </button>
      )}
      {arrOfCurrButtons.map(number => {
        return (
          <button
            key={number}
            className={`${buttonClass} ${
              number === currentPage && buttonActiveClass
            }`}
            onClick={() => {
              setCurrentButton(+number);
              setCurrentPage(+number);
            }}
          >
            {number}
          </button>
        );
      })}
      {currentPage !== totalPage && (
        <button
          className={navigationButtonClass}
          onClick={handleNext}
        >
          {navigationNextContent}
        </button>
      )}
    </div>
  );
};

export default memo(Pagination);
