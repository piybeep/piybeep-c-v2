import { ComponentProps } from "react"

export interface PrivacyProps 
extends ComponentProps<'input'>{
    title: string
    subtitle: string
}