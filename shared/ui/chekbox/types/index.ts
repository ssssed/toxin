export type CheckboxType = {
    name: string;
    children?: React.ReactNode;
    checked?: boolean;
    onChange?: () => void;
}