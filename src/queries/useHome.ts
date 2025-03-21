// import { language } from '@/lib/types/home'
import { useQuery } from '@tanstack/react-query'
import homeApiRequest from '../apiRequests/home'

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => homeApiRequest.categories(),
    // staleTime: 60 * 1000,
    // gcTime: 5 * 1000,
  })
}
