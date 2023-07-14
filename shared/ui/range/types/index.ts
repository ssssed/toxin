export type RangeInputType = {
    id?: string;
    min: number;
    max: number;
    step?: number;
    defaultValue: number[];
    value: number[];
    onInput?: (value: number[], userInteraction: boolean) => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
}