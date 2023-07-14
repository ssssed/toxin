export type ButtonType = {
    className?: string;
    children: React.ReactNode;
    type: "default" | "painted";
    onClick?: () => void;
}