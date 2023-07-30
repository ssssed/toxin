import { Container } from '@/shared/ui/container';
import { Label } from '@/shared/ui/label';
import { Range } from '@/shared/ui/range';
import { Text } from '@/shared/ui/text';
import React from 'react';
import { DEFAULT_RANGE_DATA } from '../../constants';
import { useStore } from 'effector-react';
import { $priceRange, priceRangeChange } from '../../model';

export const PriceRange = () => {
  const range = useStore($priceRange);
  const [min, max] = range;

  const handleRangeChange = (updateRange: number[]) =>
    priceRangeChange(updateRange);

  return (
    <Container
      direction='column'
      gap={13}
    >
      <Container
        direction='row'
        content='space-between'
        items='center'
        padding='0 0 12px'
      >
        <Label>диапазон цены</Label>
        <Text type='light'>
          {min}₽ - {max}₽
        </Text>
      </Container>
      <Range
        min={1000}
        max={15000}
        step={10}
        value={range}
        onInput={handleRangeChange}
        defaultValue={DEFAULT_RANGE_DATA}
      />
      <Text type='light'>Стоимость за сутки пребывания в номере</Text>
    </Container>
  );
};
