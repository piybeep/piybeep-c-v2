import { StaticImageData } from "next/image"

export interface PersonProps {
    length: number
    id: number
    windowSize: number
    title: string
    text: string
    img: StaticImageData
}