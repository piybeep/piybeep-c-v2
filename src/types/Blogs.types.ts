export interface BlogsResTypes {
    id: number
    title: string
    themes: ThemeTypes[]
    image_preview: {
        url: string
    }
    text: string
    meta_description: string
    meta_title: string
}

export interface ThemeTypes {
    id: number
    theme: string
}