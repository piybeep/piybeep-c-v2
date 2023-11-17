import { Project, Review } from "../../../../utils"

export interface SlideProps {
    text: string
    href: string
    author: string
    project: Partial<Project>
}