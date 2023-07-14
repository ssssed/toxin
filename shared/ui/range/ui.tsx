import { FC } from 'react';
import '../styles/style.scss';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { RangeInputType } from './types';

const Range: FC<RangeInputType> = ({
  min,
  max,
  step,
  style,
  value,
  onInput,
  defaultValue,
}) => {
  return (
    <RangeSlider
      min={min}
      max={max}
      step={step}
      value={value}
      onInput={onInput}
      defaultValue={defaultValue}
    />
  );
};

export { Range };
