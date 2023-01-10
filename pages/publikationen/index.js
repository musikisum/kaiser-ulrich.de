import Head from 'next/head'
import { Inter } from '@next/font/google'
import Footer from '../components/footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>Publikationen</title>
        <meta name="description" content="Publikationen von Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className='siteContainer'>      
        <main>
            <Link href='/publikationen/articles'>Artikel</Link>
        </main>      
        <Footer className='footer' />
      </div>
    </>
  )
}
