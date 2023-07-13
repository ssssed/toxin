import {
  Checkbox,
  Container,
  Label,
  Option,
  Select,
  SelectButtonGroups,
  Range,
  Text,
  CheckboxList,
} from '@/components/ui-ud/ui';
import { useNumeralForm } from '@/hook';
import React, { useMemo, useState } from 'react';

const LeftBarWrapper = () => {
  const [isComfortShow, setComfortShow] = useState<boolean>(false);
  const [isGuestShow, setGuestShow] = useState<boolean>(false);

  const [bedrooms, setBedrooms] = useState<number>(1);
  const [beds, setBeds] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const convenience = {
    bedrooms: {
      increment: () => setBedrooms(prev => prev + 1),
      decrement: () => setBedrooms(prev => (prev - 1 >= 1 ? prev - 1 : prev)),
      min: 1,
    },
    beds: {
      increment: () => setBeds(prev => prev + 1),
      decrement: () => setBeds(prev => (prev - 1 >= 1 ? prev - 1 : prev)),
      min: 1,
    },
    bathrooms: {
      increment: () => setBathrooms(prev => prev + 1),
      decrement: () => setBathrooms(prev => (prev - 1 >= 1 ? prev - 1 : prev)),
      min: 1,
    },
  };

  const [guest, setGuest] = useState<Guest>({
    adult: 0,
    children: 0,
    baby: 0,
  });
  const guestActions = {
    adult: {
      increment: () =>
        setGuest(state => ({ ...state, adult: state.adult + 1 })),
      decrement: () =>
        setGuest(state => ({
          ...state,
          adult: state.adult - 1 >= 0 ? state.adult - 1 : state.adult,
        })),
    },
    baby: {
      increment: () => setGuest(state => ({ ...state, baby: state.baby + 1 })),
      decrement: () =>
        setGuest(state => ({
          ...state,
          children:
            state.children - 1 >= 0 ? state.children - 1 : state.children,
        })),
    },
    children: {
      increment: () =>
        setGuest(state => ({ ...state, children: state.children + 1 })),
      decrement: () =>
        setGuest(state => ({
          ...state,
          baby: state.baby - 1 >= 0 ? state.baby - 1 : state.baby,
        })),
    },
  };
  const handleClearGuest = () =>
    setGuest({
      adult: 0,
      children: 0,
      baby: 0,
    });

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

  const bedroomsTitle = useMemo(
    () => useNumeralForm(bedrooms, ['спальня', 'спальня', 'спальни', 'спален']),
    [bedrooms]
  );

  const bedTitle = useMemo(
    () => useNumeralForm(beds, ['кровать', 'кровать', 'кровати', 'кроватей']),
    [beds]
  );

  const bathroomTitle = useMemo(
    () =>
      useNumeralForm(bathrooms, [
        'ванная комната',
        'ванная комната',
        'ванные комнаты',
        'ванных комнат',
      ]),
    [bathrooms]
  );

  const countPeople = useMemo(
    () => guest.adult + guest.baby + guest.children,
    [guest]
  );

  const titleGuest = useMemo(() => {
    if (+countPeople === 0) return 'Сколько гостей';
    return useNumeralForm(countPeople, ['гость', 'гость', 'гостя', 'гостей']);
  }, [countPeople]);

  const title = useMemo(
    () => `${bedroomsTitle}, ${bedTitle}, ${bathroomTitle}`,
    [bedroomsTitle, bedTitle, bathroomTitle]
  );

  const DEFAULT_RANGE_DATA = [5000, 10000];
  const [range, setRange] = useState<number[]>(DEFAULT_RANGE_DATA);
  const handleRangeChange = (arr: number[]) => {
    setRange(arr);
  };

  const [isAddServiceShow, setAddServiceShow] = useState<boolean>(false);
  const [hasBreakfast, setBreakfast] = useState<boolean>(false);
  const [hasTable, setTable] = useState<boolean>(false);
  const [hasChair, setChair] = useState<boolean>(false);
  const [hasChildBad, setChildBad] = useState<boolean>(false);
  const [hasTv, setTv] = useState<boolean>(false);
  const [hasShampoo, setShampoo] = useState<boolean>(false);

  const handleBreakfastChange = () => setBreakfast(!hasBreakfast);
  const handleTableChange = () => setTable(!hasTable);
  const handleChairChange = () => setChair(!hasChair);
  const handleChildBadChange = () => setChildBad(!hasChildBad);
  const handleTvChange = () => setTv(!hasTv);
  const handleShampooChange = () => setShampoo(!hasShampoo);

  return (
    <Container
      maxWidth={266}
      direction='column'
      items='flex-start'
      gap={30}
    >
      <Container
        direction='column'
        gap={5}
      >
        <Label className='landing-form__visitor'>Гости</Label>
        <Select
          isShow={isGuestShow}
          setShow={setGuestShow}
          title={titleGuest}
        >
          <Option
            value={guest.adult}
            increment={guestActions.adult.increment}
            decrement={guestActions.adult.decrement}
          >
            <Label>взрослые</Label>
          </Option>
          <Option
            value={guest.children}
            increment={guestActions.children.increment}
            decrement={guestActions.children.decrement}
          >
            <Label>дети</Label>
          </Option>
          <Option
            value={guest.baby}
            increment={guestActions.baby.increment}
            decrement={guestActions.baby.decrement}
          >
            <Label>младенцы</Label>
          </Option>
          <SelectButtonGroups
            onClear={handleClearGuest}
            onApply={() => {}}
          />
        </Select>
      </Container>
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
            {range[0]}₽ - {range[1]}₽
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
              <Text type='light'>
                На 1 этаже вас встретит специалист и проводит до номера.
              </Text>
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
            min={convenience.bedrooms.min}
          >
            <Label>Спальни</Label>
          </Option>
          <Option
            value={beds}
            increment={convenience.beds.increment}
            decrement={convenience.beds.decrement}
            min={convenience.beds.min}
          >
            <Label>Кровати</Label>
          </Option>
          <Option
            value={bathrooms}
            increment={convenience.bathrooms.increment}
            decrement={convenience.bathrooms.decrement}
            min={convenience.bathrooms.min}
          >
            <Label>Ванные комнаты</Label>
          </Option>
        </Select>
      </Container>
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
    </Container>
  );
};

export default LeftBarWrapper;
