export type RadioType = {
    children: React.ReactNode;
    name: string;
    checked: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}