export interface BlogsTypes {
    id: number
    title: string
    themes: string[]
    previewImage: string
    text: string
}

export interface BlogsResTypes {
    id: number
    Title: string
    themes: ThemeTypes[]
    ImagePreview: {
        url: string
    }
    Text: string
}

export interface ThemeTypes {
    id: number
    Theme: string
}