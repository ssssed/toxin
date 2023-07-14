export type SelectType = {
    isShow: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title: string;
    onAccept?: () => void;
}