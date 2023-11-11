import Link from 'next/link'

export default function Page() {
  return (
    <div>
      {'this is home page'}
      <Link href={'/dashboard'}>
        <span> go to dashboard</span>
      </Link>
    </div>
  )
}
