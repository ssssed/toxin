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