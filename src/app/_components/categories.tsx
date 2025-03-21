import homeApiRequest from '@/apiRequests/home'
// import { CategoriesType } from '@/lib/types/home'
import Image from 'next/image'

export default async function Categories() {
  const categories = await getCategories()
  // console.log(categories)

  return (
    <div className="mb-12 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 mx-auto">
      {categories?.map((item, index) => (
        <div
          className={`${
            index === 0 || index === 5
              ? 'mx-auto col-span-full sm:col-span-5'
              : 'mx-auto col-span-1 sm:col-span-2'
          }`}
          key={item.id}
        >
          <Image src={'/images/CanTho.png'} alt="category" fill />
        </div>
      ))}
    </div>
  )
}

// app/components/PostList.tsx
async function getCategories() {
  try {
    const res = await homeApiRequest.categories()
    return res?.payload.data
  } catch (error) {
    console.log('Failed to fetch categories', error)
  }
}
