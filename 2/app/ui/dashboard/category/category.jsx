'use client'

import clsx from 'clsx'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export const Category = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  // const params = new URLSearchParams(searchParams);

  const type = searchParams.get('type')?.toString()

  // job or style
  return (
    <div className='category-type'>
      <div
        className={clsx('category-type__container-left', { 'chosen ': type === 'job' })}
        onClick={() => {
          replace(`${pathname}?type=job`)
        }}
      >
        <div className={clsx('left', { 'chosen ': type === 'job' })}>
          <i className='fa-solid fa-person' style={{ color: '#38cfd0' }}></i>
          <span>Mẫu theo công việc</span>
        </div>
      </div>
      <div
        className={clsx('category-type__container-right', { 'chosen ': type === 'style' })}
        onClick={() => {
          replace(`${pathname}?type=style`)
        }}
      >
        <div className={clsx('right', { 'chosen ': type === 'style' })}>
          <i className='fa-solid fa-palette' style={{ color: '#f5a863' }}></i>
          <span>Mẫu phong cách</span>
        </div>
      </div>
    </div>
  )
}
