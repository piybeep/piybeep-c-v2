export interface ISupport {
    id: 1,
    title: string,
    description: string,
    // support_lists: ISupportList[] | []
    support_lists: (ISupportList | undefined)[]
    price: number,
}

export interface ISupportList{
    id: number
    name: string
    support_items: ISupportItem[] | []
}

export interface ISupportItem{
    id: number,
    item: string,
}
