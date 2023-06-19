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

type Option = {
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
    isShow: boolean;
    setShow: React.Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
    value: string | number;
    onAccept?: () => void;
}

type Slider = {
    images: string[];
}

type InputGroup = {
    children: React.ReactNode;
}

type Input = {
    value: string | number;
    type?: "email" | "text" | "password" | "tel";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean
}

type Form = {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

type FormInfoBar = {
    children: React.ReactNode;
}

type Button = {
    className?: string;
    children: React.ReactNode;
    type: "default" | "painted";
    onClick?: () => void;
}