export type OptionType = {
    children: React.ReactNode;
    value: string | number;
    increment: () => void;
    decrement: () => void;
    min?: number;
}