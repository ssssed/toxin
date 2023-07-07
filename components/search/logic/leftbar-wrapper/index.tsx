import {
  Checkbox,
  Container,
  Label,
  Option,
  Select,
} from '@/components/ui-ud/ui';
import React, { useMemo, useState } from 'react';

const LeftBarWrapper = () => {
  const [isComfortShow, setComfortShow] = useState<boolean>(false);

  const [bedrooms, setBedrooms] = useState<number>(1);
  const [beds, setBeds] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const convenience = {
    bedrooms: {
      increment: () => setBedrooms(prev => prev + 1),
      decrement: () => setBedrooms(prev => (prev - 1 >= 1 ? prev - 1 : prev)),
    },
    beds: {
      increment: () => setBeds(prev => prev + 1),
      decrement: () => setBeds(prev => (prev - 1 >= 1 ? prev - 1 : prev)),
    },
    bathrooms: {
      increment: () => setBathrooms(prev => prev + 1),
      decrement: () => setBathrooms(prev => (prev - 1 >= 1 ? prev - 1 : prev)),
    },
  };

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

  const bedroomsTitle = useMemo(() => {
    if (+bedrooms === 1) {
      return `${+bedrooms} спальня`;
    } else if (+bedrooms % 10 === 1 && +bedrooms !== 11) {
      return `${+bedrooms} спальня`;
    } else if (
      +bedrooms % 10 >= 2 &&
      +bedrooms % 10 <= 4 &&
      (+bedrooms < 10 || +bedrooms > 20)
    ) {
      return `${+bedrooms} спальни`;
    } else {
      return `${+bedrooms} спален`;
    }
  }, [bedrooms]);

  const bedTitle = useMemo(() => {
    if (+beds === 1) {
      return `${+beds} кровать`;
    } else if (+beds % 10 === 1 && +beds !== 11) {
      return `${+beds} кровать`;
    } else if (
      +beds % 10 >= 2 &&
      +beds % 10 <= 4 &&
      (+beds < 10 || +beds > 20)
    ) {
      return `${+beds} кровати`;
    } else {
      return `${+beds} кроватей`;
    }
  }, [beds]);

  const bathroomTitle = useMemo(() => {
    if (+bathrooms === 1) {
      return `${+bathrooms} ванная комната`;
    } else if (+bathrooms % 10 === 1 && +bathrooms !== 11) {
      return `${+bathrooms} ванная комната`;
    } else if (
      +bathrooms % 10 >= 2 &&
      +bathrooms % 10 <= 4 &&
      (+bathrooms < 10 || +bathrooms > 20)
    ) {
      return `${+bathrooms} ванные комнаты`;
    } else {
      return `${+bathrooms} ванных комнат`;
    }
  }, [bathrooms]);

  const title = useMemo(
    () => `${bedroomsTitle}, ${bedTitle}, ${bathroomTitle}`,
    [bedroomsTitle, bedTitle, bathroomTitle]
  );

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
      <Container
        direction='column'
        gap={7}
      >
        <Label>удобства номера</Label>
        <Select
          isShow={isComfortShow}
          setShow={setComfortShow}
          title={title}
        >
          <Option
            value={bedrooms}
            increment={convenience.bedrooms.increment}
            decrement={convenience.bedrooms.decrement}
          >
            <Label>Спальни</Label>
          </Option>
          <Option
            value={beds}
            increment={convenience.beds.increment}
            decrement={convenience.beds.decrement}
          >
            <Label>Кровати</Label>
          </Option>
          <Option
            value={bathrooms}
            increment={convenience.bathrooms.increment}
            decrement={convenience.bathrooms.decrement}
          >
            <Label>Ванные комнаты</Label>
          </Option>
        </Select>
      </Container>
    </Container>
  );
};

export default LeftBarWrapper;
