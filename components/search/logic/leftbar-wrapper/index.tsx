import { Checkbox, Container, Label } from '@/components/ui-ud/ui';
import { useState } from 'react';

const LeftBarWrapper = () => {
  const [isSmokeChecked, setSmokeChecked] = useState<boolean>(false);
  const [isAnimalChecked, setAnimalChecked] = useState<boolean>(false);
  const [isInviteChecked, setInviteChecked] = useState<boolean>(false);
  const [isWide, setWide] = useState<boolean>(false); // максимально широкий
  const [hasAssistantForDisabled, setAssistantForDisabled] =
    useState<boolean>(false); // есть ли помощник для инвалидов

  const handleToggleSmoke = () => setSmokeChecked(!isSmokeChecked);
  const handleToggleAnimal = () => setAnimalChecked(!isAnimalChecked);
  const handleToggleInvite = () => setInviteChecked(!isInviteChecked);
  const handleToggleWide = () => setWide(!isWide);
  const handleToggleAssistantForDisabled = () =>
    setAssistantForDisabled(!hasAssistantForDisabled);

  return (
    <Container
      maxWidth={266}
      direction='column'
      items='flex-start'
      gap={30}
    >
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
      <Container
        direction='column'
        gap={17}
      >
        <Label>Доступность</Label>
        <Container
          direction='column'
          gap={12}
        >
          <Checkbox
            name='isWide'
            checked={isWide}
            onChange={handleToggleWide}
          >
            <Container
              direction='column'
              gap={5}
            >
              <h4>Широкий коридор</h4>
              <p>Ширина коридоров в номере не менее 91 см.</p>
            </Container>
          </Checkbox>
          <Checkbox
            name='hasAssistantForDisabled'
            checked={hasAssistantForDisabled}
            onChange={handleToggleAssistantForDisabled}
          >
            <Container
              direction='column'
              gap={5}
            >
              <h4>Помощник для инвалидов</h4>
              <p>На 1 этаже вас встретит специалист и проводит до номера.</p>
            </Container>
          </Checkbox>
        </Container>
      </Container>
    </Container>
  );
};

export default LeftBarWrapper;
