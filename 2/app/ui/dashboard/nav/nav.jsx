'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useEffect } from 'react'

const links = [
  {
    name: 'dashboard',
    href: '/dashboard',
    label: (
      <Image
        src='https://dev_home.recruitery.co/assets/img/logo-text.png'
        alt='Trang chủ'
        width={130}
        height={150}
      />
    ),
  },
  { name: 'cv-sample', href: '/dashboard/cv-sample?type=job', label: 'Mẫu CV' },
  { name: 'my-background', href: '/dashboard/my-background', label: 'Lý lịch của tôi' },
  { name: 'instruction', href: '/dashboard/instruction', label: 'Hướng dẫn' },
  { name: 'pp-sample', href: '/dashboard/pp-sample', label: 'Mẫu PPT' },
]

const Nav = () => {
  const pathname = usePathname()
  const { replace } = useRouter()

  useEffect(() => {
    if (pathname === '/dashboard/cv-sample') {
      replace('/dashboard/cv-sample?type=job')
    }
  }, [pathname, replace])

  return (
    <div>
      <div className='container container--navbar'>
        <div className='navbar'>
          <div>
            <nav>
              {links.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx({ current: pathname === link.href.split('?')[0] })}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
          <button>Đăng nhập / Đăng ký</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
