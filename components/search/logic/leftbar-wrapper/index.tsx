import { Checkbox, Container } from '@/components/ui-ud/ui';
import { useState } from 'react';

const LeftBarWrapper = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container
      maxWidth={266}
      items='flex-start'
    >
      <Checkbox
        name='можно с питомцами'
        checked={isChecked}
        onChange={handleToggle}
      >
        Можно купить
      </Checkbox>
    </Container>
  );
};

export default LeftBarWrapper;
