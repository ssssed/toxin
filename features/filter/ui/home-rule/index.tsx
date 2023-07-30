import { Checkbox } from '@/shared/ui/chekbox';
import { Container } from '@/shared/ui/container';
import { Label } from '@/shared/ui/label';
import { useUnit } from 'effector-react';
import {
  $isAnimalChecked,
  $isInviteChecked,
  $isSmokeChecked,
  animalCheckedChange,
  inviteCheckedChange,
  smokeCheckedChange,
} from '../../model';

export const HomeRule = () => {
  const [isSmokeChecked, isAnimalChecked, isInviteChecked] = useUnit([
    $isSmokeChecked,
    $isAnimalChecked,
    $isInviteChecked,
  ]);

  const handleToggleSmoke = () => smokeCheckedChange(!isSmokeChecked);
  const handleToggleAnimal = () => animalCheckedChange(!isAnimalChecked);
  const handleToggleInvite = () => inviteCheckedChange(!isInviteChecked);

  return (
    <Container
      direction='column'
      gap={17}
    >
      <Label>правила дома</Label>
      <Container
        direction='column'
        gap={12}
      >
        <Checkbox
          name='canSmoke'
          checked={isSmokeChecked}
          onChange={handleToggleSmoke}
        >
          Можно курить
        </Checkbox>
        <Checkbox
          name='hasAnimal'
          checked={isAnimalChecked}
          onChange={handleToggleAnimal}
        >
          Можно с питомцами
        </Checkbox>
        <Checkbox
          name='canInviteGuest'
          checked={isInviteChecked}
          onChange={handleToggleInvite}
        >
          Можно пригласить гостей (до 10 человек)
        </Checkbox>
      </Container>
    </Container>
  );
};
