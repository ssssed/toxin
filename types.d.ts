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
    title: string;
    onAccept?: () => void;
}

type Img = {
    image: Image,
    alt: string
}

type Slider = {
    images: Img[];
}

type InputGroup = {
    children: React.ReactNode;
}

type Input = {
    value: string | number;
    type?: "email" | "text" | "password" | "tel" | "date";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean
}

type Form = {
    className?: string;
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

type RadioGroup = {
    children: React.ReactNode;
}

type Radio = {
    children: React.ReactNode;
    name: string;
    checked: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Switch = {
    value: boolean;
    onToggle: () => void;
}

type Container = {
    children: React.ReactNode;
    direction?: "row" | "column";
    gap?: roperty.Gap<string | number>;
    maxWidth?: Property.MaxWidth<string | number>;
    center?: boolean;
    padding?: Property.Padding<string | number>;
    items?: Property.AlignItems;
    content?: Property.JustifyContent;
}

type TextUI = {
    type: "default" | "light";
    children: React.ReactNode;
}

type Start = {
    rating: number;
}

type Pagination = {
    elementPerPage: number,
    totalPage: number,
    currentPage: number,
    setCurrentPage: (page: number) => void;
    buttonClass?: string;
    buttonActiveClass?: string;
    navigationButtonClass?: string;
    navigationPrevContent?: React.ReactNode | string;
    navigationNextContent?: React.ReactNode | string;
    paginationClass?: string;
}

type Rooms = {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    rooms: Room[];
    elementPerPage: number;
    totalPage: number;
}

type Checkbox = {
    name: string;
    children?: React.ReactNode;
    checked?: boolean;
    onChange?: () => void;
}

type SelectButtonGroup = {
    onClear: () => void;
    onApply: () => void;
}

type RangeInput = {
    id?: string;
    min: number;
    max: number;
    step?: number;
    defaultValue: number[];
    value: number[];
    onInput?: (value: number[], userInteraction: boolean) => void;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
}

type CheckboxList = {
    isShow: boolean;
    setShow: React.Dispatch<SetStateAction<boolean>>;
    title?: string;
    children: React.ReactNode;
}