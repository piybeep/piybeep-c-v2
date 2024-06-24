export interface BlogsResTypes {
    id: number
    title: string
    themes: ThemeTypes[]
    image_preview: {
        url: string
    }
    text: string
}

export interface ThemeTypes {
    id: number
    theme: string
}