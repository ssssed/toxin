import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Img = {
    image: string | StaticImport;
    alt: string;
}

export type SliderType = {
    images: Img[];
}