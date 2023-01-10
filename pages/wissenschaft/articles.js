import Link from 'next/link'

export default function Articles() {
  return <>
    <div>
      <h1>Hi Articles!</h1>
      <Link href='/'>{`-> back`}</Link>
    </div>
  </>
}