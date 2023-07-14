export type CheckboxListType = {
    isShow: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    children: React.ReactNode;
}