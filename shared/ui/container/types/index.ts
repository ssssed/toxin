export type ContainerType = {
    children: React.ReactNode;
    direction?: "row" | "column";
    gap?: string | number;
    maxWidth?: string | number;
    center?: boolean;
    padding?: string | number;
    items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    content?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}