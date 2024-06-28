export interface BlogsSlugTypes {
    id: number,
    attributes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        text: string;
        slug: string;
        meta_title: string;
        meta_description: string;
        rank: number;
        themes: {
            data: Theme[];
        }
        image_preview: Imagepreview;
    }
}

interface Imagepreview {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText?: any;
            caption?: any;
            width: number;
            height: number;
            formats?: any;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl?: any;
            provider: string;
            provider_metadata?: any;
            createdAt: string;
            updatedAt: string;
        };
    };
}

interface Theme {
    id: number;
    attributes: {
        theme: string;
        createdAt: string;
        updatedAt: string;
    };
}