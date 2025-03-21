import http from '@/lib/http'
import { CategoriesResponse } from '@/lib/types/home'
// import { language } from '@/lib/types/home'

const homeApiRequest = {
  categories: () => http.get<CategoriesResponse>(`/categories.json`),
}

export default homeApiRequest
