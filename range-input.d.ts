declare module 'react-range-slider-input' {
    import { ReactNode, CSSProperties } from 'react';

    export interface RangeSliderProps {
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

    export default function RangeSlider(props: RangeSliderProps): JSX.Element;
}