import { FC } from 'react';
import './style.scss';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Range: FC<RangeInput> = ({
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

export default Range;
