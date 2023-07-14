export type InputType = {
    value: string | number;
    type?: "email" | "text" | "password" | "tel" | "date";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean
}