export interface IncludesDevelopmentTypes{
  id: number
  image: {
    id: number,
    alternativeText: null,
    width: number,
    height: number,
    url: string,
    previewUrl: null,
  },
  title: string,
  text: string
  
  uslugis?:{
    id: number
  }[]
}
