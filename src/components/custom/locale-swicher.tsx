'use client'

import { locales } from '@/i18n/config'
import { setUserLocale } from '@/lib/services/locale'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState, useTransition } from 'react'

export default function LocaleSwicher() {
  const currentLocale = useLocale()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransition] = useTransition()

  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(currentLocale)

  const dropdownRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const changeLocale = (locale: string) => {
    if (locale) {
      startTransition(() => {
        setSelected(locale)
        setIsActive(!isActive)
        setUserLocale(locale)
      })
    }
  }

  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsActive(!isActive)
        }}
        className="flex items-center gap-2.5 cursor-pointer px-3 py-2 w-[150px] h-[38px] rounded-md bg-white transition-all duration-200 ease-in-out border border-[#e7e7e7]"
      >
        <span className="relative w-5 h-[15px]">
          <Image
            src={
              selected === 'en'
                ? '/icons/en.svg'
                : selected === 'ar'
                ? '/icons/ar.svg'
                : selected === 'de'
                ? '/icons/de.svg'
                : selected === 'es'
                ? '/icons/es.svg'
                : selected === 'he'
                ? '/icons/he.svg'
                : '/icons/zh.svg'
            }
            quality={100}
            fill
            alt="icon_dropdown"
            className="transition-transform duration-200 ease-in-out"
          />
        </span>
        <span className="text-[14px] uppercase cursor-pointer text-black font-medium">
          {selected === 'en'
            ? 'English'
            : selected === 'ar'
            ? 'عربى'
            : selected === 'de'
            ? 'Deutsch'
            : selected === 'es'
            ? 'Español'
            : selected === 'he'
            ? 'rעברית'
            : selected === 'zh'
            ? '中国人'
            : 'English'}
        </span>

        <span className="relative w-5 h-5">
          <Image
            src={'/icons/arrow.svg'}
            quality={100}
            fill
            alt="icon_dropdown"
            className="transition-transform duration-200 ease-in-out"
          />
        </span>
      </div>
      {isActive && (
        <ul
          ref={dropdownRef}
          className="absolute top-[110%] right-0 bg-white shadow-lg rounded-md py-1 min-w-[150px]
                     flex flex-col items-center transform origin-top-right
                     transition-transform duration-200 ease-in-out animate-fade-in border border-[#e7e7e7]"
        >
          {locales.map((locale: string, index) => (
            <li
              key={index}
              onClick={() => changeLocale(locale)}
              className={`flex gap-[6px] items-center w-full text-center px-3 py-2 rounded-md cursor-pointer text-[14px] font-medium transition-all duration-150 text-black`}
            >
              <Image
                src={`${
                  locale === 'en'
                    ? '/icons/en.svg'
                    : locale === 'ar'
                    ? '/icons/ar.svg'
                    : locale === 'de'
                    ? '/icons/de.svg'
                    : locale === 'es'
                    ? '/icons/es.svg'
                    : locale === 'he'
                    ? '/icons/he.svg'
                    : locale === 'zh'
                    ? '/icons/zh.svg'
                    : ''
                }`}
                quality={100}
                width="20"
                height="15"
                alt="icon_dropdown2"
                className="transition-transform duration-200 ease-in-out"
              />
              <span className="uppercase">{`${
                locale === 'en'
                  ? 'English'
                  : locale === 'ar'
                  ? 'عربى'
                  : locale === 'de'
                  ? 'Deutsch'
                  : locale === 'es'
                  ? 'Español'
                  : locale === 'he'
                  ? 'rעברית'
                  : locale === 'zh'
                  ? '中国人'
                  : 'English'
              } - ${locale}`}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
