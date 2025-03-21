export type language = 'en' | 'ar' | 'de' | 'es' | 'he' | 'zh'

export interface CategoriesType {
  icon: string
  id: number
  image: {
    id: number
    original: string
    thumbnail: string
    name: string
    productCount: string
    slug: string
    tags: string[]
  }
}

export interface CategoriesResponse {
  data: CategoriesType[]
}
