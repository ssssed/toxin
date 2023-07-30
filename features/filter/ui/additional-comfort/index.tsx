import { Checkbox } from '@/shared/ui/chekbox';
import { CheckboxList } from '@/shared/ui/chekbox-list';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import {
  $hasBreakfast,
  $hasChair,
  $hasChildBad,
  $hasShampoo,
  $hasTable,
  $hasTv,
  hasBreakfastChange,
  hasChairChange,
  hasChildBadChange,
  hasShampooChange,
  hasTableChange,
  hasTvChange,
} from '../../model';

export const AdditionalComfort = () => {
  const [isAddServiceShow, setAddServiceShow] = useState<boolean>(false);
  const [hasBreakfast, hasChair, hasChildBad, hasShampoo, hasTable, hasTv] =
    useUnit([
      $hasBreakfast,
      $hasChair,
      $hasChildBad,
      $hasShampoo,
      $hasTable,
      $hasTv,
    ]);

  const handleBreakfastChange = () => hasBreakfastChange(!hasBreakfast);
  const handleTableChange = () => hasTableChange(!hasTable);
  const handleChairChange = () => hasChairChange(!hasChair);
  const handleChildBadChange = () => hasChildBadChange(!hasChildBad);
  const handleTvChange = () => hasTvChange(!hasTv);
  const handleShampooChange = () => hasShampooChange(!hasShampoo);
  return (
    <CheckboxList
      title='дополнительные удобства'
      isShow={isAddServiceShow}
      setShow={setAddServiceShow}
    >
      <Checkbox
        name='breakfast'
        checked={hasBreakfast}
        onChange={handleBreakfastChange}
      >
        Завтрак
      </Checkbox>
      <Checkbox
        name='table'
        checked={hasTable}
        onChange={handleTableChange}
      >
        Писменный стол
      </Checkbox>
      <Checkbox
        name='chair'
        checked={hasChair}
        onChange={handleChairChange}
      >
        Стул для кормления
      </Checkbox>
      <Checkbox
        name='child-bad'
        checked={hasChildBad}
        onChange={handleChildBadChange}
      >
        Кроватка
      </Checkbox>
      <Checkbox
        name='tv'
        checked={hasTv}
        onChange={handleTvChange}
      >
        Телевизор
      </Checkbox>
      <Checkbox
        name='shampoo'
        checked={hasShampoo}
        onChange={handleShampooChange}
      >
        Шампунь
      </Checkbox>
    </CheckboxList>
  );
};
