import { createEvent, createStore } from 'effector';

import { DEFAULT_RANGE_DATA } from '../constants';

// Rooms counter
export const $bedrooms = createStore<number>(1);
export const $beds = createStore<number>(1);
export const $bathrooms = createStore<number>(1);

// Increment
export const bedroomsIncrement = createEvent<number>();
export const bedsIncrement = createEvent<number>();
export const bathroomsIncrement = createEvent<number>();

// Decrement
export const bedroomsDecrement = createEvent<number>();
export const bedsDecrement = createEvent<number>();
export const bathroomsDecrement = createEvent<number>();

// Rooms counter Events
$bedrooms.on(bedroomsIncrement, (_, bedrooms) => bedrooms);
$bedrooms.on(bedroomsDecrement, (_, bedrooms) => bedrooms);

$beds.on(bedsIncrement, (_, beds) => beds);
$beds.on(bedsDecrement, (_, beds) => beds);

$bathrooms.on(bathroomsIncrement, (_, bathrooms) => bathrooms);
$bathrooms.on(bathroomsDecrement, (_, bathrooms) => bathrooms);

// Additional Amenities
export const $hasBreakfast = createStore<boolean>(false);
export const $hasTable = createStore<boolean>(false);
export const $hasChair = createStore<boolean>(false);
export const $hasChildBad = createStore<boolean>(false);
export const $hasTv = createStore<boolean>(false);
export const $hasShampoo = createStore<boolean>(false);

// Additional Change
export const hasBreakfastChange = createEvent<boolean>();
export const hasTableChange = createEvent<boolean>();
export const hasChairChange = createEvent<boolean>();
export const hasChildBadChange = createEvent<boolean>();
export const hasTvChange = createEvent<boolean>();
export const hasShampooChange = createEvent<boolean>();

// Additional Amenities Events
$hasBreakfast.on(hasBreakfastChange, (_, hasBreakfast) => hasBreakfast);
$hasTable.on(hasTableChange, (_, hasTable) => hasTable);
$hasChair.on(hasChairChange, (_, hasChair) => hasChair);
$hasChildBad.on(hasChildBadChange, (_, hasChildBad) => hasChildBad);
$hasTv.on(hasTvChange, (_, hasTv) => hasTv);
$hasShampoo.on(hasShampooChange, (_, hasShampoo) => hasShampoo);

// Guest counter
export const $adult = createStore<number>(0);
export const $children = createStore<number>(0);
export const $baby = createStore<number>(0);

// Guest Change
export const adultChange = createEvent<number>();
export const childrenChange = createEvent<number>();
export const babyChange = createEvent<number>();

// Guest Events
$adult.on(adultChange, (_, adult) => adult);
$children.on(childrenChange, (_, children) => children);
$baby.on(babyChange, (_, baby) => baby);

// Price Range
export const $priceRange = createStore<number[]>(DEFAULT_RANGE_DATA);

// Price Range Change
export const priceRangeChange = createEvent<number[]>();

// Price Range Events
$priceRange.on(priceRangeChange, (_, priceRange) => priceRange);

// Home rule
export const $isSmokeChecked = createStore<boolean>(false);
export const $isAnimalChecked = createStore<boolean>(false);
export const $isInviteChecked = createStore<boolean>(false);

// Home rule change
export const smokeCheckedChange = createEvent<boolean>();
export const animalCheckedChange = createEvent<boolean>();
export const inviteCheckedChange = createEvent<boolean>();

// Home rule events
$isSmokeChecked.on(smokeCheckedChange, (_, isSmokeChecked) => isSmokeChecked);
$isAnimalChecked.on(animalCheckedChange, (_, isAnimalChecked) => isAnimalChecked);
$isInviteChecked.on(inviteCheckedChange, (_, isInviteChecked) => isInviteChecked);

// Accessibility
export const $isWide = createStore<boolean>(false);
export const $hasAssistantForDisabled = createStore<boolean>(false);

// Accessibility change
export const wideChange = createEvent<boolean>();
export const assistantForDisabledChange = createEvent<boolean>();

// Accessibility Events
$isWide.on(wideChange, (_, isWide) => isWide);
$hasAssistantForDisabled.on(assistantForDisabledChange, (_, hasAssistantForDisabled) => hasAssistantForDisabled);
