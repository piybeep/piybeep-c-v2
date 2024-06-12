import { StaticImageData } from "next/image"

export interface ItemProps {
    index: number
    title: string
    img: StaticImageData
    alt: string
}