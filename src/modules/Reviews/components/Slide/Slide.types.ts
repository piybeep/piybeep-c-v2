import { Project, Review } from "../../../../utils"

export interface SlideProps {
    id: string | number
    text: string
    href: string
    author: string
    project: Partial<Project>
}
