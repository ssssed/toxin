type Title = {
    children: React.ReactNode;
}

type Subtitle = {
    children: React.ReactNode;
}

type Label = {
    children: React.ReactNode;
    className?: string;
}

type SubmitButton = {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

type DatePicker = {
    className?: string;
}

type SelectItem = {
    children: React.ReactNode;
    value: string | number;
    increment: () => void;
    decrement: () => void;
}

type GuestDataChanging = {
    handleAdultIncrement: () => void;
    handleChildrenIncrement: () => void;
    handleBabyIncrement: () => void;
    handleAdultDecrement: () => void;
    handleChildrenDecrement: () => void;
    handleBabyDecrement: () => void;
}

type LandingForm = {
    guest: Guest;
    onClear: () => void;
    changeGuest: GuestDataChanging;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

type Guest = {
    adult: number;
    children: number;
    baby: number;
}

type Select = {
    guest: Guest;
    onClear: () => void;
    changeGuest: GuestDataChanging;
}