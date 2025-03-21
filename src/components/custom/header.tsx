'use client'

import { ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LocaleSwicher from './locale-swicher'

export default function Header() {
  const t = useTranslations()

  const styleAfter =
    'after:content-[""] after:block after:w-full after:h-[60px] after:absolute after:top-[-52px] after:left-0 bg-[#26bed6]'

  const menuItems = [
    {
      title: t('Demos'),
      href: '/',
      submenu: [
        {
          title: 'Web',
          href: '/services/web-development',
        },
        {
          title: 'Mobile',
          href: '/services/mobile-apps',
          submenu: [
            { title: 'iOS', href: '/services/mobile-apps/ios' },
            { title: 'Android', href: '/services/mobile-apps/android' },
          ],
        },
      ],
    },
    {
      title: 'Men Wear',
      href: '#',
      submenu: [
        {
          title: 'Web',
          href: '/services/web-development',
        },
        {
          title: 'Mobile',
          href: '/services/mobile-apps',
          submenu: [
            { title: 'iOS', href: '/services/mobile-apps/ios' },
            { title: 'Android', href: '/services/mobile-apps/android' },
          ],
        },
      ],
    },
    {
      title: 'Woman Wear',
      href: '/about',
      submenu: [
        {
          title: 'Web',
          href: '/services/web-development',
        },
        {
          title: 'Mobile',
          href: '/services/mobile-apps',
          submenu: [
            { title: 'iOS', href: '/services/mobile-apps/ios' },
            { title: 'Android', href: '/services/mobile-apps/android' },
          ],
        },
      ],
    },
    {
      title: 'Search',
      href: '/',
    },
    {
      title: 'Shops',
      href: '/',
    },
    {
      title: 'Pages',
      href: '/',
    },
  ]

  return (
    <header
    // className="relative z-[2] w-full h-16 sm:h-20 lg:h-24"
    >
      <div className="fixed z-[2] w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-24 md:px-8 lg:px-6">
        <div className="flex items-center justify-between mx-auto max-w-[1920px] h-full w-full">
          <div className="relative w-[95px] h-[30px]">
            <Image src="/images/CanTho.png" alt="vercel" fill />
          </div>

          {/* menu */}
          <ul className="flex items-center justify-center h-full">
            {menuItems.map((menu) => (
              <li className="cursor-pointer relative group h-full" key={menu.title}>
                <div className="relative inline-flex items-center px-3 py-2 h-full text-sm font-normal xl:text-base xl:px-4">
                  <span className="text-black">{menu.title}</span>
                  {menu.submenu && (
                    <span className="ml-1 transition-transform duration-200 ease-in-out group-hover:rotate-180">
                      <ChevronDown className="text-[#c7c7c7] w-5 h-5" />
                    </span>
                  )}
                  {/* Border dưới */}
                  <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>

                {menu.submenu && (
                  <div
                    className={`absolute left-0 top-[100%] py-5 min-w-[240px] bg-[#f9f9f9] shadow-1xl animate-fadeIn group-hover:block hidden ${styleAfter}`}
                  >
                    {menu.submenu.map((item) => (
                      <div
                        key={`${item.title}`}
                        className={`px-3 py-2 text-[16px] cursor-pointer hover:bg-[#e6e6e6]`}
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Language */}
          <LocaleSwicher />

          <div className="flex gap-6 lg:gap-5 xl:gap-8 2xl:gap-10">
            {/* Search */}
            <Search className="w-5 h-5 cursor-pointer" />

            {/* Sign In */}
            <button className="border-none outline-none text-sm xl:text-base font-semibold cursor-pointer">
              Sign In
            </button>

            {/* Giỏ hàng */}
            <div className="cursor-pointer">
              <Image src="/icons/card.svg" alt="card" width="20" height="20" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
