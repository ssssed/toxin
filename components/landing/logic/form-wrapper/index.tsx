'use client';

import { useState } from 'react';
import { LandingForm } from '@/components/landing/ui';

const LandingFormWrapper = () => {
  const [guest, setGuest] = useState<Guest>({
    adult: 0,
    children: 0,
    baby: 0,
  });

  const handleAdultIncrement = () =>
    setGuest(state => ({ ...state, adult: state.adult + 1 }));
  const handleChildrenIncrement = () =>
    setGuest(state => ({ ...state, children: state.children + 1 }));
  const handleBabyIncrement = () =>
    setGuest(state => ({ ...state, baby: state.baby + 1 }));

  const handleAdultDecrement = () =>
    setGuest(state => ({
      ...state,
      adult: state.adult - 1 >= 0 ? state.adult - 1 : state.adult,
    }));
  const handleChildrenDecrement = () =>
    setGuest(state => ({
      ...state,
      children: state.children - 1 >= 0 ? state.children - 1 : state.children,
    }));
  const handleBabyDecrement = () =>
    setGuest(state => ({
      ...state,
      baby: state.baby - 1 >= 0 ? state.baby - 1 : state.baby,
    }));

  const handleClearGuest = () =>
    setGuest({
      adult: 0,
      children: 0,
      baby: 0,
    });

  return (
    <LandingForm
      guest={guest}
      onClear={handleClearGuest}
      changeGuest={{
        handleAdultIncrement,
        handleChildrenIncrement,
        handleBabyIncrement,
        handleAdultDecrement,
        handleChildrenDecrement,
        handleBabyDecrement,
      }}
      onSubmit={e => {
        e.preventDefault();
      }}
    />
  );
};

export default LandingFormWrapper;